const initState = {
  products: [
    {
      name: "The Republic",
      author: "Plato",
      category: "Philosophy Books",
      description:
        "It is Plato's best-known work, and has proven to be one of the world's most influential works of philosophy and political theory, both intellectually and historically.[",
      price: 20,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Politeia_beginning._Codex_Parisinus_graecus_1807.jpg/200px-Politeia_beginning._Codex_Parisinus_graecus_1807.jpg",
    },
    {
      name: "Critique of Pure Reason",
      author: "Immanuel Kant",
      category: "Philosophy Books",
      description:
        "Kant explores human reason and then works to establish its illusions and get down to core constituents. ",
      price: 22,
      image:
        "https://cdn.lifehack.org/wp-content/uploads/2020/10/45-1536x1090.jpg",
    },
    {
      name: "The Incoherence of the Philosophers",
      author: " Abu Hamid Al-Ghazali",
      category: "Philosophy Books",
      description:
        "The Incoherence of the Philosophers is the title of a landmark 11th-century work by the Persian theologian Abū Ḥāmid Muḥammad ibn Muḥammad al-Ghazali and a student of the Asharite school of Islamic theology criticizing the Avicennian school of early Islamic philosophy.",
      price: 47,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThi43ox-RBJk3oxVMOuU7zLRMZIwnfflai7hA__BzuEddGmzF9",
    },
    {
      name: "Muqaddimah of Ibn Khaldun",
      author: "Ibn Khaldun ",
      category: "Historical Books",
      description: "records an early view of universal history.",
      price: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYpLe9ivTee7SVqLONgSZY8Zxq7Lt5SJYWA&usqp=CAU",
    },
    {
      name: "Sirat Ibn Hisham",
      author: "Ibn Hisham",
      category: "Historical Books",
      description: "The Life of the Prophet",
      price: 77,
      image:
        "https://www.neelwafurat.com/images/lb/abookstore/covers/hard/82/82387.jpg",
    },
    {
      name: "A Short History of the World",
      author: "H.G. Wells",
      category: "Historical Books",
      description:
        "Spanning the origins of the Earth to the outcome of the First World War, this is a brilliantly compelling account of the evolution of life and the development of the human race.",
      price: 77,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1311647938l/718477.jpg",
    },
  ],
  selected: []
};
function productsReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SELECTED_CAT":
      let selected = state.products.filter((book) =>
        book.category === payload ? book : null
      );

      return { ...state, selected };

    default:
      return state;
  }

}

export default productsReducer;
