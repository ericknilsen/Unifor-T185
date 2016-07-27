package br.unifor.bean;

import java.util.Collection;

import javax.ejb.Remote;

import br.unifor.entity.Aluno;


@Remote
public interface AlunoBeanRemote {
	
	public Collection<Aluno> listaAlunos();
	
	public String adicionaAluno(Aluno aluno);
	
	public String removeAluno(Long id);
	
	public String alteraAluno(Aluno aluno);

}
