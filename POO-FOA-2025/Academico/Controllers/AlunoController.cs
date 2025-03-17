using Academico.Models;
using Microsoft.AspNetCore.Mvc;

namespace Academico.Controllers
{
    public class AlunoController : Controller
    {
        private static List<Aluno> students = new List<Aluno>();

        public IActionResult Index()
        {
            return View(students);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("RegistroAcademico", "NomeCompleto", "Curso", "Semestre", "DataNascimento", "TelefoneContato", "EmailInstitucional", "EnderecoResidencial", "Cidade", "Estado")] Aluno student)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(student);
                }

                student.Id = students.Count + 1;
                students.Add(student);
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                ViewData["Erro"] = ex.Message;
                return View(student);
            }
        }

        public IActionResult Edit(int id)
        {
            var student = students.FirstOrDefault(student => student.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Aluno student)
        {
            var existingStudent = students.FirstOrDefault(s => s.Id == student.Id);

            if (existingStudent == null)
            {
                return NotFound();
            }


            existingStudent.RegistroAcademico = student.RegistroAcademico;
            existingStudent.NomeCompleto = student.NomeCompleto;
            existingStudent.Curso = student.Curso;
            existingStudent.Semestre = student.Semestre;
            existingStudent.DataNascimento = student.DataNascimento;
            existingStudent.TelefoneContato = student.TelefoneContato;
            existingStudent.EmailInstitucional = student.EmailInstitucional;
            existingStudent.EnderecoResidencial = student.EnderecoResidencial;
            existingStudent.Cidade = student.Cidade;
            existingStudent.Estado = student.Estado;

            return RedirectToAction("Index");
        }

        public IActionResult Details(int id)
        {
            var student = students.FirstOrDefault(student => student.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }

        public IActionResult Delete(int id)
        {
            var student = students.FirstOrDefault(a => a.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult ConfirmDeletion(int id)
        {
            try
            {
                var existingStudent = students.FirstOrDefault(student => student.Id == id);

                if (existingStudent == null)
                {
                    return NotFound();
                }

                students.Remove(existingStudent);
                return RedirectToAction(nameof(Index));
            }
            catch (Exception err)
            {
                ModelState.AddModelError("", $"Erro ao excluir o aluno: {err.Message}");
            }

            return View(students);
        }
    }
}
