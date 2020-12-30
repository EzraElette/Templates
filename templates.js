class Templates {
  static async init(path = "/templates") {
    return this.cacheTemplates(path);
  }

  static async cacheTemplates(path) {
    /**
     * A new Templates instance to bre treturned by this method
     */
    let obj = new Templates();

    /**
     * wait for the document result of folder
     * then convert to a document node
     */

    let a = await (await fetch(path)).text();
    const doc = new DOMParser().parseFromString(a, 'text/html');

    /**
     * find all anchor tags with the icon-handlebars class
     */
    const templates = doc.querySelectorAll('a.icon-handlebars');

    /**
     * request each resource linked in files
     * and compile or register.
     */
    for (let i = 0; i < templates.length; i++) {
      const { href, title } = templates[i];

      const file = await (await fetch(href)).text();
      let id = title.split('.handlebars')[0];

      if (/_partial$/.test(id)) {
        id = id.replace(/_partial$/, '');
        Handlebars.registerPartial(id, file);
      } else {
        obj[id] = Handlebars.compile(file);
      }
    }

    return obj;
  }
}