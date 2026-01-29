let jobs = [
  { title: "تنظيف شوارع", field: "خدمات", status: "متاح" },
  { title: "ترميم منازل", field: "إنشاءات", status: "مكتمل" },
  { title: "توزيع مساعدات", field: "خدمات", status: "متاح" }
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
          <td style="color:${color}; font-weight:bold">
            ${job.status}
          </td>
        </tr>
      `);
    }
  });
}

displayJobs();

$("#filter").on("change", function () {
  displayJobs(this.value);
});

$("#registerForm").on("submit", function (e) {
  e.preventDefault();

  let name = $("#name").val();
  let email = $("#email").val();

  if (name === "" || email === "") {
    alert("الرجاء تعبئة جميع الحقول");
  } else {
    alert("تم التسجيل بنجاح");
    this.reset();
  }
});
