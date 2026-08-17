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
    Heart: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    Instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    Star: "M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16l-1.9-5.1L4.5 9l5.6-1.4z",
    WhatsApp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    YouTube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186 31.59 31.59 0 0 0 0 12a31.59 31.59 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136A31.59 31.59 0 0 0 24 12a31.59 31.59 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
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

    document.querySelectorAll("[data-href]").forEach((El) => {
      const Value = GetByPath(El.getAttribute("data-href"));
      if (Value != null) El.setAttribute("href", Value);
    });

    document.querySelectorAll("[data-src]").forEach((El) => {
      const Value = GetByPath(El.getAttribute("data-src"));
      if (Value != null) El.setAttribute("src", Value);
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
      const IconSvg = IconKey ? Icon(IconKey, 18) : "";
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

    const TeacherIcons = [
      Icon("Flask", 18, "currentColor"),
      Icon("Globe", 18, "currentColor"),
      Icon("BookS", 18, "currentColor"),
    ];
    Container.innerHTML = Content.Teachers.Items.map((Teacher, Index) => {
      const PhotoSrc = Teacher.Photo ? encodeURI(Teacher.Photo) : "";
      const PhotoHtml = PhotoSrc
        ? `<img class="vc-teacher-photo-img" src="${PhotoSrc}" alt="${Teacher.PhotoCaption || Teacher.Name}">`
        : `<span class="vc-photo-caption vc-photo-caption--small">${Teacher.PhotoCaption || Teacher.Name}</span>`;

      const Tags = Array.isArray(Teacher.SubjectTags) ? Teacher.SubjectTags : [];
      const TagsHtml = Tags.length
        ? `<div class="vc-teacher-tags">${Tags.map((Tag) => `<span class="vc-teacher-tag">${Tag}</span>`).join("")}</div>`
        : Teacher.Subjects
          ? `<div class="vc-teacher-subjects"><span class="vc-muted-label">Subjects — </span>${Teacher.Subjects}</div>`
          : "";

      return `<article class="vc-fade vc-teacher-card">
          <div class="vc-teacher-photo">${PhotoHtml}</div>
          <div class="vc-teacher-body">
            <div class="vc-teacher-top">
              <span class="vc-teacher-icon">${TeacherIcons[Index] || TeacherIcons[0]}</span>
              <div>
                <h3 class="vc-teacher-name">${Teacher.Name}</h3>
                <div class="vc-teacher-role">${Teacher.Role}</div>
              </div>
            </div>
            <p class="vc-teacher-bio">${Teacher.Bio}</p>
            ${TagsHtml}
          </div>
        </article>`;
    }).join("");
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

    const BatchIcons = [Icon("Sun"), Icon("Book"), Icon("Trophy"), Icon("ChatS"), Icon("Calc"), Icon("Cap")];
    Container.innerHTML = Content.Courses.Batches.map((Batch, Index) => {
      const IsActive = Batch.Theme === "Dark";
      const ActiveClass = IsActive ? " is-active" : "";
      const Selected = IsActive ? "true" : "false";

      return `<button type="button" class="vc-fade vc-batch-tab${ActiveClass}" role="tab" id="BatchTab${Index}" data-batch-index="${Index}" aria-selected="${Selected}" aria-controls="BatchDetail">
          <span class="vc-badge vc-batch-icon">${BatchIcons[Index] || BatchIcons[0]}</span>
          <span class="vc-batch-tab-copy">
            <span class="vc-batch-range">${Batch.Range}</span>
            <span class="vc-batch-title">${Batch.Title}</span>
          </span>
        </button>`;
    }).join("");
  }

  function SetupBatchCards() {
    const Tabs = [...document.querySelectorAll(".vc-batch-tab")];
    const Detail = document.getElementById("BatchDetail");
    if (!Tabs.length || !Detail) return;

    function SetActiveTab(NextTab) {
      if (!NextTab) return;

      Tabs.forEach((Tab) => {
        const IsNext = Tab === NextTab;
        Tab.classList.toggle("is-active", IsNext);
        Tab.setAttribute("aria-selected", IsNext ? "true" : "false");
      });

      const Index = Number(NextTab.getAttribute("data-batch-index"));
      const Batch = Content.Courses.Batches[Index];
      if (!Batch) return;

      Detail.innerHTML =
        `<p class="vc-batch-panel-label">About this batch</p>
        <h3 class="vc-batch-panel-range">${Batch.Range}</h3>
        <p class="vc-batch-panel-title">${Batch.Title}</p>
        <p class="vc-batch-panel-body">${Batch.Body}</p>
        <a href="#contact" class="vc-link vc-batch-link">${Content.Courses.EnquireLink}</a>`;
    }

    Tabs.forEach((Tab) => {
      Tab.addEventListener("click", () => SetActiveTab(Tab));
    });

    const Initial = Tabs.find((Tab) => Tab.classList.contains("is-active")) || Tabs[0];
    SetActiveTab(Initial);
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

    Container.innerHTML = Content.Contact.Rows.map((Row, Index) => {
      const BatchValues = Array.isArray(Row.Values) ? Row.Values : [];
      let ValueHtml;

      if (Row.Href) {
        ValueHtml = `<a class="vc-contact-value vc-contact-value--link" href="${Row.Href}">${Row.Value}</a>`;
      } else if (BatchValues.length) {
        ValueHtml = `<div class="vc-contact-value vc-contact-batches">${BatchValues.map(
          (Item) => `<span>${Item}</span>`
        ).join("")}</div>`;
      } else {
        ValueHtml = `<div class="vc-contact-value">${Row.Value}</div>`;
      }

      return `<div class="vc-contact-row">
          <span class="vc-badge vc-contact-icon">${ContactIcons[Index]}</span>
          <div>
            <div class="vc-contact-label">${Row.Label}</div>
            ${ValueHtml}
          </div>
        </div>`;
    }).join("");
  }

  function BrandIcon(Name, Size) {
    const SvgSize = Size ?? 22;
    const Path = IconPaths[Name];
    if (typeof Path !== "string") return "";

    const FillRule = Name === "YouTube" || Name === "Instagram" || Name === "WhatsApp" ? ' fill-rule="evenodd"' : "";
    return (
      `<svg width="${SvgSize}" height="${SvgSize}" viewBox="0 0 24 24" fill="currentColor"${FillRule} aria-hidden="true">` +
      `<path d="${Path}"/></svg>`
    );
  }

  function RenderContactSocials() {
    const Container = document.getElementById("ContactSocials");
    const Socials = Content.Contact.Socials;
    if (!Container || !Socials || !Array.isArray(Socials.Links)) return;

    const LinksHtml = Socials.Links.map((Link) => {
      const Slug = Link.Name.toLowerCase();
      return `<a class="vc-contact-social vc-contact-social--${Slug}" href="${Link.Href}" target="_blank" rel="noopener noreferrer" aria-label="${Link.Name}">${BrandIcon(Link.Name, 22)}</a>`;
    }).join("");

    Container.innerHTML = `<div class="vc-contact-label">${Socials.Label}</div><div class="vc-contact-socials">${LinksHtml}</div>`;
  }

  function SetupWhatsAppFab() {
    const Fab = document.getElementById("WhatsAppFab");
    const ContactSection = document.getElementById("contact");
    if (!Fab) return;

    const WhatsApp = Content.Contact?.Socials?.Links?.find((Link) => Link.Name === "WhatsApp");
    if (WhatsApp?.Href) Fab.setAttribute("href", WhatsApp.Href);
    Fab.innerHTML = BrandIcon("WhatsApp", 30);

    if (!ContactSection || !("IntersectionObserver" in window)) return;

    const Observer = new IntersectionObserver(
      (Entries) => {
        const IsVisible = Entries.some((Entry) => Entry.isIntersecting);
        Fab.classList.toggle("is-hidden", IsVisible);
      },
      { threshold: 0.2 }
    );

    Observer.observe(ContactSection);
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
    RenderContactSocials();
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

  function SetupPhotoFades() {
    const Photos = Content.ClassPhotos;
    if (!Array.isArray(Photos) || Photos.length < 2) return;

    const IntervalMs = 3800;
    const Setups = [
      { Id: "HeroPhotoFade", Start: 0, Caption: Content.Hero.PhotoCaption },
      { Id: "AboutPhotoFade", Start: Math.floor(Photos.length / 2), Caption: Content.About.PhotoCaption },
    ];

    Setups.forEach((Setup, SetupIndex) => {
      const Frame = document.getElementById(Setup.Id);
      if (!Frame) return;

      Frame.innerHTML = Photos.map(
        (Src, Index) =>
          `<img class="vc-photo-fade-img${Index === Setup.Start ? " is-active" : ""}" src="${encodeURI(Src)}" alt="${Setup.Caption || "Classroom photo"}" loading="${Index === Setup.Start ? "eager" : "lazy"}">`
      ).join("");

      const Images = [...Frame.querySelectorAll(".vc-photo-fade-img")];
      let Current = Setup.Start;

      window.setTimeout(() => {
        window.setInterval(() => {
          Images[Current].classList.remove("is-active");
          Current = (Current + 1) % Images.length;
          Images[Current].classList.add("is-active");
        }, IntervalMs);
      }, SetupIndex * 1400);
    });
  }

  function SetupForm() {
    const Form = document.getElementById("EnrollForm");
    const FormPanel = document.getElementById("FormPanel");
    const FormSuccess = document.getElementById("FormSuccess");
    const FormError = document.getElementById("FormError");
    const ResetBtn = document.getElementById("FormResetBtn");
    const FormspreeEndpoint = "https://formspree.io/f/mqpzynzn";

    if (!Form || !FormPanel || !FormSuccess) return;

    Form.addEventListener("submit", async (Event) => {
      Event.preventDefault();
      const Name = document.getElementById("FormName");
      const Phone = document.getElementById("FormPhone");
      const SubmitButton = Form.querySelector(".vc-form-submit");

      if (!Name.value.trim() || !Phone.value.trim()) {
        FormError.hidden = false;
        return;
      }

      FormError.hidden = true;
      if (SubmitButton) SubmitButton.setAttribute("disabled", "true");

      const FormPayload = new window.FormData(Form);
      FormPayload.set("_subject", `Vardhaman Classes enquiry from ${Name.value.trim()}`);

      try {
        const Response = await fetch(FormspreeEndpoint, {
          method: "POST",
          body: FormPayload,
          headers: { Accept: "application/json" },
        });

        if (!Response.ok) throw new Error("Request failed");

        FormPanel.hidden = true;
        FormSuccess.hidden = false;
      } catch (SubmitError) {
        FormError.hidden = false;
      } finally {
        if (SubmitButton) SubmitButton.removeAttribute("disabled");
      }
    });

    ResetBtn.addEventListener("click", () => {
      Form.reset();
      FormError.hidden = true;
      FormSuccess.hidden = true;
      FormPanel.hidden = false;
    });
  }

  function Init() {
    window.scrollTo(0, 0);
    const Page = document.querySelector(".vc-page");
    if (Page) Page.scrollTop = 0;

    try {
      PopulateContent();
      SetupPhotoFades();
      SetupReveal();
      SetupBatchCards();
      SetupForm();
      SetupWhatsAppFab();
    } catch (Error) {
      document.querySelectorAll(".vc-fade, .vc-rise2").forEach((El) => {
        El.setAttribute("data-shown", "");
      });
    }

    window.setTimeout(function () {
      window.scrollTo(0, 0);
      if (Page) Page.scrollTop = 0;
    }, 0);
  }

  function StartWhenReady() {
    if (document.documentElement.classList.contains("vc-splash-active")) {
      document.addEventListener("VcSplashDone", Init, { once: true });
      return;
    }
    Init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", StartWhenReady);
  } else {
    StartWhenReady();
  }
})();
