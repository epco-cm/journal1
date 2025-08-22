const documents = [
       { id: 1, title: "Accueil", content: "Ceci est la page d'accueil de mon journal", url: "/" },
       { id: 2, title: "Articles", content: "Liste des articles à venir", url: "/articles/" }
     ];
     const idx = lunr(function () {
       this.ref('id');
       this.field('title');
       this.field('content');
       documents.forEach(doc => this.add(doc));
     });
     function search(query) {
       return idx.search(query).map(result => documents.find(doc => doc.id == result.ref));
     }
