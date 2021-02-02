const products = [
  {
    name: 'Minister',
    image:
      'https://images.saatchiart.com/saatchi/421473/art/6498473/5568151-OGSFKGWK-8.jpg',
    description: '..................................................',
    brand: 'Han Xiao',
    country: 'China',
    category: 'Painting',
    price: 1760,
    subject: 'Men',
    style: ['Expressionism'],
    medium: 'Oil',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Tea Rose Fields (Featured Painting)',
    image:
      'https://images.saatchiart.com/saatchi/8619/art/2399599/1469693-DXVNVUTI-8.jpg',
    description: `"Tea Rose Fields" is an original 12x12 inch floral abstract painting created in 2014. It was painted with acrylic on a 1.5 inch deep wood panel.- The painting is signed on the front, and signed, titled and dated on the back.- Sides are painted black.- Arrives wired and ready to hang on your wall with a signed certificate of authenticity.This little piece has been chosen to be featured in the Affordable Originals for $500 and Under Collection on Saatchi Art's homepage. the collection can be viwed here: http://www.saatchiart.com/art-collection/Painting-Drawing-Photography/Affordable-Originals-for-500-and-Under/667232/89625/viewEnjoy!`,
    brand: 'Lisa Carney',
    country: 'Canada',
    category: 'Painting',
    price: 470,
    subject: 'Botanic',
    style: ['Abstract', 'Abstract ', 'Expressionism', 'Modern'],
    medium: 'Acrylic',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Go find yourself a friend',
    image:
      'https://images.saatchiart.com/saatchi/192132/art/7964150/7031606-BLUMBIPB-8.jpg',
    description:
      'Painterly WorkManuela Karin Knaut’s painterly work reflects the enthusiasm of the artist for travel, the discovery of new terrain and the inevitable leaving of her own comfort zone. The often harsh reality on the streets of Johannesburg, the to German eyes unexpectedly chaotic and disorderly-seeming life in the townships, the colourful variety in the narrow alleys of Accra, the unvarnished, broken walls, the graffiti of the street artists of Brooklyn, the uninhibited, real life and action in the most diverse corners of the world: it is the brokenness, the charmingly imperfect, the frequently temporary-seeming that fascinates Manuela Karin Knaut, and which she imbues into her pictorial language and the primary idea of her location-specific and large format installations. It is the rough edges and ends of life far away from the centre, far from the average safety and comfort. The artist consciously seeks out these confrontations with barriers and the edges of society.Knaut expresses this restlessness, this almost childish, unprepossessing curiosity and adventurousness in her works. Her paintings are balancing acts of colour, form and line, surface and space, abstraction and figurativeness, image and text. Individual areas of colour are put down with strong paint marks and then worked over and over. A variety of more or less defined objects keep being woven into the painterly process. Everyday objects straight from life are contoured with line, or painted over, or revealed again.The artist combines a great variety of materials in her paintings, true to the work style inspired by elements of street art scenes. She glues paper waste, images, photos, fabric pieces or bits of text onto her paintings, ties, rips, glues, sews or nails found objects onto or into her image worlds. She adds, reduces, scrapes, rips, rubs – no painting is treated like a raw egg. Life is frequently chaotic in Manuela Knaut’s generous studio and integrated print workshop. The artist works in four rooms on a variety of works concurrently, some hang on the walls, some wait in the drying rack for the next phase of work, others lean up somewhere or just lie on the floor. Here a layer of concrete is drying, there preparations for screen printing take form. In another place a base coat, a varnish, a glue or spray is applied. Still in all the chaos there is never any doubt about the moment when a painting is ‘finished’, when the story of that painting has been told. In the same clear and seemingly spontaneous way in which the first layers of paint have found their way onto the canvas, she is just as definitive about the point at which the work is finished. Sometimes after 15 minutes, sometimes after days or even weeks.Next the works are hung on a plain white presentation wall, checked again and again and finally signed. At this moment a strange peace captures the usually pulsating studio space. Time, peace and space for observers, for their own stories and an invitation to let the thoughts wander and find one’s own place in the colourful world of Manuela Karin Knaut.',
    brand: 'Manuela Karin Knaut',
    country: 'Germany',
    category: 'Painting',
    price: 5750,
    subject: 'Abstract',
    style: [
      'Abstract',
      'Abstract ',
      'Expressionism',
      'Modern',
      'Street ',
      'Art',
    ],

    medium: 'Airbrush',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Untitled Pink Infinity',
    image:
      'https://images.saatchiart.com/saatchi/296153/art/4156271/3226122-BZWVDUED-8.jpg',
    description:
      'Layers of acrylic on paper textured and scored.  abstract pink fluorescent shape with hand drawn alternating 8888 symbols of infinity',
    brand: 'Bridget Griggs',
    country: 'Canada',
    category: 'Painting',
    price: 1330,
    subject: 'Abstract',
    style: ['Abstract', 'Minimalism', 'Modern'],
    medium: 'Acrylic',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Cambodia Mixed Media V - Limited Edition 1 of 25',
    image:
      'https://images.saatchiart.com/saatchi/352287/art/3231976/2301863-BOPXJHAW-8.jpg',
    description:
      'Photographic work from my Asia Series.  Artwork is ready to hang and comes with a solid wooden frame. Lambda-Print  on fine art paper behind clear float glass, with a passe-partout. Limited Edition of 25.Solid wood frame with passe-partoutSize & format: 80 x 45 cm Artwork size,  94 x 59 cm (incl. frame)  Paper: Hahnemühle Photo RagFrame: Walnut solid wood 20 mmPasse-partout: Natural whiteGlass: Glossy float glass',
    brand: 'Sven Pfrommer',
    country: 'Germany',
    category: 'Photography',
    price: 1690,
    subject: 'Landscape',
    style: ['Fine ', 'Art'],
    medium: 'Photo',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Masada Desert Fortress I - Limited Edition of 10',
    image:
      'https://images.saatchiart.com/saatchi/663504/art/7846665/6914536-MZWWKAIM-8.jpg',
    description:
      'Available in the following sizes:- 54 x 40 cm (21.25 x 15.7 inch): 20 copies - 71 x 53 cm (28 x 20.8 inch): 10 copies The artwork/photo is sold unframed, and will be carefully rolled in a hard tube with many layers of protection for safe international shipping. I work with top printing houses in Madrid & Barcelona, Spain that have extensive experience dealing with art galleries to make sure the art prints are of the highest gallery/museum quality.Printed on Canson Etching Rag paper, the most premium quality fine art paper which delivers the most accurate and vibrant colors in print as you see onscreen and also gives a touch of classic painting to the photo.The photo is printed with 2cm white border each side, which makes it easy for putting in frame. Comes with signed & numbered Certificate of Authenticity, to be affixed to the back when framed. Also artist signature in pencil at the back of the photo.',
    brand: 'Viet Ha Tran',
    country: 'Spain',
    category: 'Photography',
    price: 940,
    subject: 'Landscape',
    style: ['Abstract', 'Art ', 'Deco', 'Fine ', 'Art', 'Minimalism', 'Modern'],
    medium: 'Color',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Boavista Hatch',
    image:
      'https://images.saatchiart.com/saatchi/771003/art/2568763/1638683-ENLMNRXR-8.jpg',
    description:
      "Late morning Sun casting it's hatchwork over Boavista, Portugal.\n" +
      '\n' +
      "Limited edition 1 of 9 from the series 'Shape & Shadow' 2014\n" +
      '\n' +
      'Printed on exhibition quality Premium Luster photographic paper, signed, numbered and dated by the artist. Comes with a certificate of authenticity.',
    brand: 'Matthew Farrar',
    country: 'United States',
    category: 'Photography',
    price: 1350,
    subject: 'Architecture',
    style: ['Abstract'],
    medium: 'Color',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Corona20-T - Limited Edition of 10',
    image:
      'https://images.saatchiart.com/saatchi/45298/art/7442603/6511775-HRQRCIFU-8.jpg',
    description:
      'The start of 2020 has been a tumultuous one with the outbreak of a coronavirus (Covid-19) in Wuhan, China, resulting in a surprise move to lock down the city in the middle of the lunar new year. The drastic measures, however, were not enough to contain the spread of the highly infectious novel coronavirus.The following painting was created as a response and reaction to the outbreak. The use of acrylics on thin porous papers lend well a water fluid-like painting, allowing the paint to dissolve and spread like a contagion. My choice of red and blue as colours complimented the rich mustard yellow print paper, resulting in a contrasting richness of both subdued and depth.',
    brand: 'Yip Fung',
    country: '....',
    category: 'Photography',
    price: 1550,
    subject: 'Abstract',
    style: ['Abstract', 'Abstract ', 'Expressionism', 'Fine ', 'Art'],
    medium: 'Acrylic',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Try (series Tired Ghosts)',
    image:
      'https://images.saatchiart.com/saatchi/736969/art/2759150/1829043-FUANCNGW-8.jpg',
    description:
      '"Tired Ghost" is a series which use multi-medias, differents sizes and supports... a very free project where everything is possible... centered around the ghosts, like friends, enemies or just about a presence.',
    brand: 'Jean-Philippe Brunaud',
    country: 'France',
    category: 'Drawing',
    price: 5250,
    subject: 'Landscape',
    style: ['Expressionism', 'Figurative', 'Fine ', 'Art'],
    medium: 'Charcoal',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Crocodiles',
    image:
      'https://images.saatchiart.com/saatchi/93123/art/1804110/952212-8.jpg',
    description:
      'Ink and pencil on handmade paper. \n' +
      '\n' +
      'No framing required. Ready to hang in white wood, box type frame. Picture is float mounted displaying deckled edge of paper.',
    brand: 'Thomas Lamb',
    country: 'United Kingdom',
    category: 'Drawing',
    price: 3390,
    subject: 'Nature',
    style: ['Realism'],
    medium: 'Pen and ',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Shapes On The Wall 1',
    image:
      'https://images.saatchiart.com/saatchi/399524/art/3387021/2456908-VQOXMIVD-8.jpg',
    description:
      'Mixed media on watercolor paper 300g 70 x 50 cm.Delivered not framed.Part of the series "When I Close My Eye".Abstraction is an infinite space of expression. Since I am young, as far I can remember, I loved to lost myself in an abstract shape, a task on a wall, a color...I could see another world inside. I am still faithful to the little girl in me who looked at the world with more interest to the hidden things in depth than in surface. Abstract shapes are to me the representation of what is inside or what is in the other side of a thing, an idea, the organic part of a body.',
    brand: 'Marijah Bac Cam',
    country: 'France',
    category: 'Drawing',
    price: 1040,
    subject: 'Graffiti',
    style: [
      'Street ',
      'Art',
      'Surrealism',
      'Abstract',
      'Abstract ',
      'Expressionism',
      'Conceptual',
    ],
    medium: 'Ink',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Word of your mouth',
    image:
      'https://images.saatchiart.com/saatchi/394449/art/2976472/2046365-JFILUICF-8.jpg',
    description:
      'You are what you say so watch your words!\n' +
      ' Ink  and watercolor on watercolor paper\n' +
      '76 by56 cm \n' +
      'Will come rolled',
    brand: 'Olga Gál',
    country: '....',
    category: 'Drawing',
    price: 430,
    subject: 'Portrait',
    style: ['Expressionism', 'Figurative'],
    medium: 'Ink',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: '"Waiting For. The Trap." (#2)',
    image:
      'https://images.saatchiart.com/saatchi/691112/art/4822245/3892073-JCSIZLXK-8.jpg',
    description: `..Christoph Robausch's work expresses itself through simple creative acts of asking about and marking the nature of change. He is more interested in ‘how it changes’ than in ‘what to change'. Recording this process in layers of oil painting, india ink, marble dust and microcrystalline wax he transforms the starched and reinforced canvas into sculptural paintings and sculptures...SCULPTURE: Waiting For. The Trap." (#2) - 70x90x33cm:Layers of mixed oil, india ink, microcrystalline wax, resin, marble dust on starched and reinforced canvas. The multiple processing involves laminating, glueing, gentle scratching and flaming thus hardening the surface and giving the artwork an extraordinary impression and sculptural qualities. An UV resistant matt varnish has been applied to enhance and protect the high quality of this work. An integrated concrete base (3 kg, ∑4 kg) ensures a solid stand. ..Delicately signed by the artist with his initials cR. Secure art packaging, will be shipped in a specially designed crate to arrive undamaged...`,
    brand: 'Christoph Robausch',
    country: 'Austria',
    category: 'Sculpture',
    price: 3880,
    subject: 'Abstract',
    style: ['Abstract', 'Modern'],
    medium: 'Oil',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Sun - Gold light - Sculpture',
    image:
      'https://images.saatchiart.com/saatchi/680298/art/8000687/7067987-MFPIDIAB-8.jpg',
    description:
      'Sun - Gold light - SculptureOriginal unique digital sculpture.Digital, ink on Aluminium.Circular sculpture on Aluminium.BIG LOVE, HAVE FUNNYWA ART PROJECT',
    brand: 'NYWA ART PROJECT',
    country: '....',
    category: 'Sculpture',
    price: 4070,
    subject: 'Abstract',
    style: ['Abstract', 'Abstract ', 'Expressionism', 'Minimalism', 'Modern'],
    medium: 'ink',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'Yellow Blue Bird',
    image:
      'https://images.saatchiart.com/saatchi/571222/art/7593155/6661767-BQMUESSL-22.jpg',
    description:
      'One-of-a-kind ceramic pieces, using expressive lines (sgraffito technique) to depict images of women, birds and other themes. Influenced by various cultures, these pieces are glazed in rich, earthy colors and imbued with a sensuous fluidity that evokes a lyrical and poetic quality. Low fire underglazes and slips are used, along with high fire glazes.',
    brand: 'Heidi Lanino',
    country: 'United States',
    category: 'Sculpture',
    price: 1500,
    subject: 'Nature',
    style: ['Figurative', 'Fine ', 'Art', 'Folk'],
    medium: 'Ceramic',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
  {
    name: 'MODZ672',
    image:
      'https://images.saatchiart.com/saatchi/292268/art/3378368/2448255-IFHQYAYD-22.jpg',
    description:
      'abstract sculpturecolor green and silverdimension 200hx67x50 cm',
    brand: 'Andrea de Ranieri',
    country: 'Italy',
    category: 'Sculpture',
    price: 3910,
    subject: 'Abstract',
    style: ['Abstract'],
    medium: 'Metal',
    countInStock: 1,
    rating: 1,
    numReviews: 1,
  },
]

export default products
