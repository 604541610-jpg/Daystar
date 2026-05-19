const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle?.addEventListener("click", () => {
  siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", siteNav.classList.contains("open") ? "true" : "false");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("leadForm");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const name = data.get("name") || "";
  const company = data.get("company") || "";
  const contact = data.get("contact") || "";
  const budget = data.get("budget") || "";
  const goal = data.get("goal") || "";

  const subject = encodeURIComponent("官网咨询 - TikTok广告代理服务");
  const body = encodeURIComponent(
`姓名：${name}
公司/店铺：${company}
联系方式：${contact}
月广告预算：${budget}
当前增长目标：${goal}`
  );

  window.location.href = `mailto:604541610@qq.com?subject=${subject}&body=${body}`;
});
