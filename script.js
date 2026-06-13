(function () {
  const Content = window.PageContent;
  if (!Content) return;

  const IconPaths = {
    Boards: ["M3 11l9-7 9 7", "M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"],
    Cap: ["M22 9 12 5 2 9l10 4 10-4Z", "M6 11v5c0 1 2.7 2 6 2s6-1 6-2v-5", "M22 9v5"],
    Users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75", ["c", 9, 7, 4]],
    Clip: ["M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2", ["r", 9, 2, 6, 4, 1], "M9 13l2 2 4-4"],
    Chat: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", "M9.5 8.5a2.5 2.5 0 1 1 3 2.4c-.6.3-1 .9-1 1.6", ["c", 11.4, 15.5, 0.35]],
    Pin: ["M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z", ["c", 12, 10, 3]],
    Sun: [["c", 12, 12, 4], "M12 2v2", "M12 20v2", "M4 12H2", "M22 12h-2", "M5.6 5.6 7 7", "M17 17l1.4 1.4", "M18.4 5.6 17 7", "M7 17l-1.4 1.4"],
    Book: ["M2 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z", "M22 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7Z"],
    Trophy: ["M6 9H4.5a2.5 2.5 0 0 1 0-5H6", "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", "M4 22h16", "M10 14.6V17c0 .5-.4 1-1 1.2C7.8 18.7 7 20.2 7 22", "M14 14.6V17c0 .5.4 1 1 1.2 1.2.5 2 2 2 3.8", "M18 2H6v7a6 6 0 0 0 12 0Z"],
    Flask: ["M9 3h6", "M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3", "M8.5 14h7"],
    Globe: [["c", 12, 12, 9], "M3 12h18", "M12 3a15 15 0 0 1 0 18", "M12 3a15 15 0 0 0 0 18"],
    Calc: [["r", 5, 3, 14, 18, 3], "M9 7h6", ["c", 9, 12, 0.4], ["c", 12, 12, 0.4], ["c", 15, 12, 0.4], ["c", 9, 16, 0.4], ["c", 12, 16, 0.4], ["c", 15, 16, 0.4]],
    BookS: ["M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2Z", "M8 7h7", "M8 11h5"],
    ChatS: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"],
    Phone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"],
    Mail: [["r", 2, 4, 20, 16, 2], "M22 7 12 13 2 7"],
    Clock: [["c", 12, 12, 9], "M12 7v5l3 2"],
    Heart: "M12 21s-7.5-4.6-10-9.3C.4 8.2 2 4.5 5.3 4.5c2 0 3.4 1.2 4.2 2.4.8-1.2 2.2-2.4 4.2-2.4 3.3 0 4.9 3.7 3.3 7.2C19.5 16.4 12 21 12 21z",
    Star: "M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16l-1.9-5.1L4.5 9l5.6-1.4z",
  };

  const SubjectIconKeys = {
    Maths: "Calc",
    Science: "Flask",
    English: "BookS",
    "Hindi & Marathi": "ChatS",
    "Social Studies": "Globe",
  };

  function GetByPath(Path) {
    return Path.split(".").reduce((Obj, Key) => (Obj != null ? Obj[Key] : undefined), Content);
  }

  function BuildSvg(Paths, Size, Stroke, StrokeWidth, Fill) {
    const SvgSize = Size ?? 27;
    const SvgStroke = Stroke ?? "#0E6A78";
    const SvgStrokeWidth = StrokeWidth ?? 2;
    const Parts = [];
    Paths.forEach((Node) => {
      if (typeof Node === "string") {
        Parts.push(`<path d="${Node}"/>`);
      } else if (Node[0] === "c") {
        Parts.push(`<circle cx="${Node[1]}" cy="${Node[2]}" r="${Node[3]}"/>`);
      } else if (Node[0] === "r") {
        Parts.push(`<rect x="${Node[1]}" y="${Node[2]}" width="${Node[3]}" height="${Node[4]}" rx="${Node[5] || 0}"/>`);
      }
    });

    if (Fill) {
      return `<svg width="${SvgSize}" height="${SvgSize}" viewBox="0 0 24 24" fill="${Fill}">${Parts.join("")}</svg>`;
    }

    return (
      `<svg width="${SvgSize}" height="${SvgSize}" viewBox="0 0 24 24" fill="none" ` +
      `stroke="${SvgStroke}" stroke-width="${SvgStrokeWidth}" stroke-linecap="round" stroke-linejoin="round">${Parts.join("")}</svg>`
    );
  }

  function Icon(Name, Size, Stroke, StrokeWidth) {
    const Paths = IconPaths[Name];
    if (typeof Paths === "string") {
      return BuildSvg([Paths], Size, Stroke, StrokeWidth, Stroke ?? "#0E6A78");
    }
    return BuildSvg(Paths, Size, Stroke, StrokeWidth);
  }

  function StarSvg(Size, Fill) {
    return BuildSvg([IconPaths.Star], Size, Fill, 0, Fill);
  }

  function FillSimpleFields() {
    document.title = Content.Meta.Title;
    const MetaDesc = document.querySelector('meta[name="description"]');
    if (MetaDesc) MetaDesc.setAttribute("content", Content.Meta.Description);

    document.querySelectorAll("[data-text]").forEach((El) => {
      const Value = GetByPath(El.getAttribute("data-text"));
      if (Value != null) El.textContent = Value;
    });

    document.querySelectorAll("[data-alt]").forEach((El) => {
      const Value = GetByPath(El.getAttribute("data-alt"));
      if (Value != null) El.setAttribute("alt", Value);
    });

    document.querySelectorAll("[data-placeholder]").forEach((El) => {
      const Value = GetByPath(El.getAttribute("data-placeholder"));
      if (Value != null) El.setAttribute("placeholder", Value);
    });

    const Copyright = document.getElementById("CopyrightText");
    if (Copyright) {
      Copyright.textContent = Content.Footer.Copyright.replace("{{ year }}", String(new Date().getFullYear()));
    }
  }

  function RenderNavLinks() {
    const Container = document.getElementById("NavLinks");
    if (!Container) return;

    Container.innerHTML = Content.Navigation.Links.map(
      (Link) => `<a href="${Link.Href}" class="vc-link vc-nav-link">${Link.Label}</a>`
    ).join("");
  }

  function RenderSubjectTags() {
    const Container = document.getElementById("SubjectTags");
    if (!Container) return;

    Container.innerHTML = Content.Hero.Subjects.map((Subject) => {
      const IconKey = SubjectIconKeys[Subject];
      const IconSvg = IconKey ? Icon(IconKey, 16) : "";
      return `<span class="vc-tag">${IconSvg}${Subject}</span>`;
    }).join("");
  }

  function RenderMarquee() {
    const Container = document.getElementById("TrustMarquee");
    if (!Container) return;

    const Item = (Text, Hidden) =>
      `<div class="vc-marquee-item"${Hidden ? ' aria-hidden="true"' : ""}>${StarSvg(15, "#3FB0C4")}${Text}</div>`;

    const Items = Content.TrustMarquee.map((Text) => Item(Text, false)).join("");
    const Duplicate = Content.TrustMarquee.map((Text) => Item(Text, true)).join("");
    Container.innerHTML = Items + Duplicate;
  }

  function RenderAboutParagraphs() {
    const Container = document.getElementById("AboutParagraphs");
    if (!Container) return;

    Container.innerHTML = Content.About.Paragraphs.map(
      (Paragraph) => `<p class="vc-rise2 vc-d2 vc-body">${Paragraph}</p>`
    ).join("");
  }

  function RenderAboutStats() {
    const Container = document.getElementById("AboutStats");
    if (!Container) return;

    const StatIcons = [Icon("Boards"), Icon("Cap"), Icon("Users")];
    Container.innerHTML = Content.About.Stats.map(
      (Stat, Index) =>
        `<div class="vc-stat">
          <span class="vc-badge vc-stat-icon">${StatIcons[Index]}</span>
          <div>
            <div class="vc-stat-big">${Stat.Big}</div>
            <div class="vc-stat-small">${Stat.Small}</div>
          </div>
        </div>`
    ).join("");
  }

  function RenderTeachers() {
    const Container = document.getElementById("TeacherGrid");
    if (!Container) return;

    const TeacherIcons = [Icon("Flask", 24), Icon("Globe", 24)];
    Container.innerHTML = Content.Teachers.Items.map(
      (Teacher, Index) =>
        `<div class="vc-fade vc-teacher-card">
          <div class="vc-teacher-photo">
            <span class="vc-photo-caption vc-photo-caption--small">${Teacher.PhotoCaption}</span>
          </div>
          <div class="vc-teacher-body">
            <span class="vc-badge vc-teacher-icon">${TeacherIcons[Index]}</span>
            <h3 class="vc-teacher-name">${Teacher.Name}</h3>
            <div class="vc-teacher-role">${Teacher.Role}</div>
            <p class="vc-teacher-bio">${Teacher.Bio}</p>
            <div class="vc-teacher-subjects"><span class="vc-muted-label">Subjects — </span>${Teacher.Subjects}</div>
          </div>
        </div>`
    ).join("");
  }

  function RenderReasons() {
    const Container = document.getElementById("ReasonGrid");
    if (!Container) return;

    const ReasonIcons = [
      Icon("Boards"),
      Icon("Cap"),
      Icon("Users"),
      Icon("Clip"),
      Icon("Chat"),
      Icon("Pin"),
    ];

    Container.innerHTML = Content.Reasons.Items.map(
      (Reason, Index) =>
        `<div class="vc-fade vc-reason-card">
          <span class="vc-reason-number">${Reason.Number}</span>
          <span class="vc-badge vc-reason-icon">${ReasonIcons[Index]}</span>
          <h3 class="vc-reason-title">${Reason.Title}</h3>
          <p class="vc-reason-body">${Reason.Body}</p>
        </div>`
    ).join("");
  }

  function RenderBatches() {
    const Container = document.getElementById("BatchGrid");
    if (!Container) return;

    const BatchIcons = [Icon("Sun"), Icon("Book"), Icon("Trophy")];
    Container.innerHTML = Content.Courses.Batches.map((Batch, Index) => {
      const ThemeClass = Batch.Theme === "Dark" ? "vc-batch-card--dark" : "vc-batch-card--light";
      return `<div class="vc-fade vc-batch-card ${ThemeClass}">
        <span class="vc-badge vc-batch-icon">${BatchIcons[Index]}</span>
        <div class="vc-batch-range">${Batch.Range}</div>
        <h3 class="vc-batch-title">${Batch.Title}</h3>
        <p class="vc-batch-body">${Batch.Body}</p>
        <a href="#contact" class="vc-link vc-batch-link">${Content.Courses.EnquireLink}</a>
      </div>`;
    }).join("");
  }

  function RenderReviews() {
    const Container = document.getElementById("ReviewGrid");
    if (!Container) return;

    const HeartSvg = Icon("Heart", 20, "#8E1B2A", 0);
    Container.innerHTML = Content.Reviews.Items.map(
      (Review) =>
        `<figure class="vc-fade vc-testimonial-card">
          <div class="vc-quote-mark">"</div>
          <blockquote class="vc-quote-text">${Review.Text}</blockquote>
          <figcaption class="vc-quote-footer">
            <span class="vc-quote-avatar">${HeartSvg}</span>
            <div class="vc-quote-author">${Review.Author}<div class="vc-quote-board">${Review.Board}</div></div>
          </figcaption>
        </figure>`
    ).join("");
  }

  function RenderContactRows() {
    const Container = document.getElementById("ContactRows");
    if (!Container) return;

    const ContactIcons = [
      Icon("Pin", 22, "#3FB0C4"),
      Icon("Phone", 22, "#3FB0C4"),
      Icon("Mail", 22, "#3FB0C4"),
      Icon("Clock", 22, "#3FB0C4"),
    ];

    Container.innerHTML = Content.Contact.Rows.map(
      (Row, Index) =>
        `<div class="vc-contact-row">
          <span class="vc-badge vc-contact-icon">${ContactIcons[Index]}</span>
          <div>
            <div class="vc-contact-label">${Row.Label}</div>
            <div class="vc-contact-value">${Row.Value}</div>
          </div>
        </div>`
    ).join("");
  }

  function RenderFormOptions() {
    const GradeSelect = document.getElementById("FormGrade");
    const BoardSelect = document.getElementById("FormBoard");
    if (!GradeSelect || !BoardSelect) return;

    Content.Contact.Grades.forEach((Grade) => {
      const Option = document.createElement("option");
      Option.value = Grade;
      Option.textContent = Grade;
      GradeSelect.appendChild(Option);
    });

    Content.Contact.BoardOptions.forEach((Board) => {
      const Option = document.createElement("option");
      Option.value = Board;
      Option.textContent = Board;
      BoardSelect.appendChild(Option);
    });
  }

  function RenderFooterLinks() {
    const Container = document.getElementById("FooterLinks");
    if (!Container) return;

    Container.innerHTML = Content.Footer.ExploreLinks.map(
      (Link) => `<a href="${Link.Href}" class="vc-link vc-footer-link">${Link.Label}</a>`
    ).join("");
  }

  function PopulateContent() {
    FillSimpleFields();
    RenderNavLinks();
    RenderSubjectTags();
    RenderMarquee();
    RenderAboutParagraphs();
    RenderAboutStats();
    RenderTeachers();
    RenderReasons();
    RenderBatches();
    RenderReviews();
    RenderContactRows();
    RenderFormOptions();
    RenderFooterLinks();
  }

  function SetupReveal() {
    const Elements = [...document.querySelectorAll(".vc-fade, .vc-rise2")];
    if (!Elements.length) return;

    if (!("IntersectionObserver" in window)) {
      Elements.forEach((El) => El.setAttribute("data-shown", ""));
      return;
    }

    const Observer = new IntersectionObserver(
      (Entries) => {
        Entries.forEach((Entry) => {
          if (Entry.isIntersecting) {
            Entry.target.setAttribute("data-shown", "");
            Observer.unobserve(Entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    Elements.forEach((El) => {
      const Rect = El.getBoundingClientRect();
      if (Rect.top < window.innerHeight * 0.94) {
        El.setAttribute("data-shown", "");
      } else {
        Observer.observe(El);
      }
    });

    setTimeout(() => Elements.forEach((El) => El.setAttribute("data-shown", "")), 2800);
  }

  function SetupForm() {
    const Form = document.getElementById("EnrollForm");
    const FormPanel = document.getElementById("FormPanel");
    const FormSuccess = document.getElementById("FormSuccess");
    const FormError = document.getElementById("FormError");
    const ResetBtn = document.getElementById("FormResetBtn");

    if (!Form || !FormPanel || !FormSuccess) return;

    Form.addEventListener("submit", (Event) => {
      Event.preventDefault();
      const Name = document.getElementById("FormName");
      const Phone = document.getElementById("FormPhone");

      if (!Name.value.trim() || !Phone.value.trim()) {
        FormError.hidden = false;
        return;
      }

      FormError.hidden = true;
      FormPanel.hidden = true;
      FormSuccess.hidden = false;
    });

    ResetBtn.addEventListener("click", () => {
      Form.reset();
      FormError.hidden = true;
      FormSuccess.hidden = true;
      FormPanel.hidden = false;
    });
  }

  function Init() {
    PopulateContent();
    SetupReveal();
    SetupForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", Init);
  } else {
    Init();
  }
})();
