using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class ChangeUserEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Interests",
                table: "Users",
                newName: "Skills");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Users",
                newName: "Bio");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Skills",
                table: "Users",
                newName: "Interests");

            migrationBuilder.RenameColumn(
                name: "Bio",
                table: "Users",
                newName: "Gender");
        }
    }
}
