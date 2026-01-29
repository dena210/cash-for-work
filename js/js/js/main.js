let jobs = [
  { title: "تنظيف شوارع", field: "خدمات", status: "متاح" },
  { title: "ترميم منازل", field: "إنشاءات", status: "مكتمل" }
];

function displayJobs(filter = "all") {
  $("#jobsTable").html("");

  jobs.forEach(job => {
    if (filter === "all" || job.field === filter) {
      let color = job.status === "متاح" ? "green" : "red";
      $("#jobsTable").append(`
        <tr>
          <td>${job.title}</td>
          <td>${job.field}</td>
          <td style="color:${color}">${job.status}</td>
        </tr>
      `);
    }
  });
}

displayJobs();

$("#filter").on("change", function () {
  displayJobs(this.value);
});

$("#registerForm").on("submit", function(e){
  e.preventDefault();
  alert("تم التسجيل بنجاح");
});
