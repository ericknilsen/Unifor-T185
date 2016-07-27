package br.unifor.restful.resources;

import java.util.ArrayList;
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
import br.unifor.restful.model.AlunoVO;


@Stateless
@Path("/alunos")
public class AlunoResource {
	
	@EJB
    private AlunoBeanRemote alunoBean;
		
	private Aluno montaAluno(AlunoVO alunoVO) {
		
		Aluno aluno = new Aluno();
		aluno.setId(alunoVO.getId());
		aluno.setNome(alunoVO.getNome());
		aluno.setEmail(alunoVO.getEmail());
		aluno.setIdade(alunoVO.getIdade());
		aluno.setCurso(alunoVO.getCurso());
		
		return aluno;
	}
	
	private AlunoVO montaAlunoVO(Aluno aluno) {
		
		AlunoVO alunoVO = new AlunoVO();
		alunoVO.setId(aluno.getId());
		alunoVO.setNome(aluno.getNome());
		alunoVO.setEmail(aluno.getEmail());
		alunoVO.setIdade(aluno.getIdade());
		alunoVO.setCurso(aluno.getCurso());
		
		
		return alunoVO;
	}
	
	private Collection<AlunoVO> montaAlunosVO(Collection<Aluno> listaAlunos) {
		
		Collection<AlunoVO> listaAlunosVO = new ArrayList<AlunoVO>();
		for (Aluno aluno : listaAlunos) {
			listaAlunosVO.add(this.montaAlunoVO(aluno));			
		}
		
		return listaAlunosVO;
	}
	
	@GET
	@Produces("application/json")
	public Collection<AlunoVO> listaAlunos() {				
		
		return this.montaAlunosVO(alunoBean.listaAlunos());			
		
	}	
	
	
	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String adicionaAluno(AlunoVO alunoVO) {
						
		return alunoBean.adicionaAluno(montaAluno(alunoVO));
	}	
		
	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String alteraAluno(AlunoVO alunoVO) {		
				
		return alunoBean.alteraAluno(montaAluno(alunoVO));
	}
	
	@Path("{id}")
	@DELETE	
	@Produces("text/plain")
	public String removeAluno(@PathParam("id") Long id) {
		
		return alunoBean.removeAluno(id);
	}	

}

