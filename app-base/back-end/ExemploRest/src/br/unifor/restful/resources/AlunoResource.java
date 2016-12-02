package br.unifor.restful.resources;

import java.util.Collection;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import br.unifor.bean.AlunoBeanRemote;
import br.unifor.entity.Aluno;


@Stateless
@Path("/alunos")
public class AlunoResource {
	
	@EJB
    private AlunoBeanRemote alunoBean;
	
	@GET
	@Produces("application/json")
	public Collection<Aluno> listaAlunos() {				
		
		return alunoBean.listaAlunos();	
	}	
	
	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String adicionaAluno(Aluno aluno) {
						
		return alunoBean.adicionaAluno(aluno);
	}	
		
	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String alteraAluno(Aluno aluno) {		
				
		return alunoBean.alteraAluno(aluno);
	}
	
	@Path("{id}")
	@DELETE	
	@Produces("text/plain")
	public String removeAluno(@PathParam("id") Long id) {
		
		return alunoBean.removeAluno(id);
	}	

}

