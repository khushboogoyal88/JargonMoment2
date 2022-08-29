using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
  public class RegisterDto
  {
    [Required]
    [StringLength(30, MinimumLength = 3, ErrorMessage = "Username must be between 3-30 characters")]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }
  }
}