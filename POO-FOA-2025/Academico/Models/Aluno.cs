using System.ComponentModel.DataAnnotations;

namespace Academico.Models
{
    public class Aluno
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "É necessário informar o registro acadêmico.")]
        [StringLength(20, ErrorMessage = "O registro acadêmico deve ter no máximo 20 caracteres.")]
        public string RegistroAcademico { get; set; }

        [Required(ErrorMessage = "O nome completo é obrigatório.")]
        [StringLength(100, ErrorMessage = "O nome completo deve ter no máximo 100 caracteres.")]
        [Display(Name = "Nome Completo")]
        public string NomeCompleto { get; set; }

        [Required(ErrorMessage = "Informe o curso.")]
        [StringLength(50, ErrorMessage = "O nome do curso não pode exceder 50 caracteres.")]
        public string Curso { get; set; }

        [Required(ErrorMessage = "O semestre precisa ser informado.")]
        [Range(1, 12, ErrorMessage = "O semestre deve ser um valor entre 1 e 12.")]
        public string Semestre { get; set; }

        [Required(ErrorMessage = "A data de nascimento é obrigatória.")]
        [DataType(DataType.Date, ErrorMessage = "A data de nascimento fornecida não é válida.")]
        [Display(Name = "Data de Nascimento")]
        public string DataNascimento { get; set; }

        [Required(ErrorMessage = "O telefone de contato é essencial.")]
        [StringLength(15, MinimumLength = 10, ErrorMessage = "O telefone deve ter entre 10 e 15 caracteres.")]
        [RegularExpression(@"^\(\d{2}\) \d{4,5}-\d{4}$", ErrorMessage = "O formato do telefone deve ser (XX) XXXXX-XXXX.")]
        [Display(Name = "Telefone de Contato")]
        public string TelefoneContato { get; set; }

        [Required(ErrorMessage = "O e-mail institucional é necessário.")]
        [EmailAddress(ErrorMessage = "Digite um endereço de e-mail válido.")]
        [Display(Name = "E-mail Institucional")]
        public string EmailInstitucional { get; set; }

    [StringLength(150, ErrorMessage = "O endereço não pode ultrapassar 150 caracteres.")]
    [Display(Name = "Endereço Residencial")]
    public string? EnderecoResidencial { get; set; }

        [Required(ErrorMessage = "A cidade deve ser informada.")]
        [StringLength(50, ErrorMessage = "A cidade não pode ter mais de 50 caracteres.")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "A UF (Estado) é obrigatória.")]
        [StringLength(2, ErrorMessage = "A UF deve ter exatamente 2 caracteres.")]
        [RegularExpression(@"^[A-Z]{2}$", ErrorMessage = "A UF deve conter apenas letras maiúsculas.")]
        public string Estado { get; set; }
    }
}
