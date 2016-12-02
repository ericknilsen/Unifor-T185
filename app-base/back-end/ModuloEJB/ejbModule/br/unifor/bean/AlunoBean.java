package br.unifor.bean;

import java.util.Collection;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.unifor.dao.AlunoDAO;
import br.unifor.entity.Aluno;

/**
 * Session Bean implementation class AlunoBean
 */
@Stateless
public class AlunoBean implements AlunoBeanRemote {

	@EJB
	private AlunoDAO alunoDAO;

	public AlunoBean() {

	}

	@Override
	public Collection<Aluno> listaAlunos() {

		return this.alunoDAO.lista();
	}

	@Override
	public String adicionaAluno(Aluno aluno) {

		return this.alunoDAO.insere(aluno);
	}

	@Override
	public String removeAluno(Long id) {

		return this.alunoDAO.remove(id);
	}

	@Override
	public String alteraAluno(Aluno aluno) {

		return this.alunoDAO.altera(aluno);
	}
}
