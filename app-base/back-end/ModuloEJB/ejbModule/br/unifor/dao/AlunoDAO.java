package br.unifor.dao;

import java.util.Collection;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

import br.unifor.entity.Aluno;

@Stateless
public class AlunoDAO {

	@PersistenceContext
	private EntityManager manager;

	public String insere(Aluno aluno) {

		try {
			manager.persist(aluno);

			return "Aluno " + aluno.getNome() + " inserido";
		} catch (PersistenceException e) {
			return "Erro ao inserir dados" + e;
		}

	}

	public Collection<Aluno> lista() {

		return manager.createQuery("SELECT a FROM Aluno a").getResultList();
	}

	public String remove(Long id) {

		try {
			Aluno aluno = manager.find(Aluno.class, id);
			manager.remove(aluno);
			return "Aluno " + aluno.getNome() + " removido";
		} catch (PersistenceException e) {
			return "Erro ao remover dados" + e;
		}
	}

	public String altera(Aluno aluno) {

		try {
			Aluno alunoDetached = manager.find(Aluno.class, aluno.getId());

			Aluno alunoManaged = manager.merge(alunoDetached);

			alunoManaged.setNome(aluno.getNome());
			alunoManaged.setEmail(aluno.getEmail());
			alunoManaged.setIdade(aluno.getIdade());
			alunoManaged.setCurso(aluno.getCurso());
		
		
			return "Aluno " + aluno.getNome() + " atualizado";
		} catch (PersistenceException e) {
			return "Erro ao atualizar dados" + e;
		}
	}

}
