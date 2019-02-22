// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const mySchools = [
  {
    schoolName: "Valhalla Elementary School",
    aboutSchool: "In Norse mythology, Valhalla is a majestic, enormous hall located in Asgard, ruled over by the god Odin. Chosen by Odin, half of those who die in combat travel to Valhalla upon death, led by valkyries, while the other half go to the goddess Freyja's field Fólkvangr. In Valhalla, the dead join the masses of those who have died in combat, known as Einherjar, and various legendary Germanic heroes and kings, as they prepare to aid Odin during the events of Ragnarök. Before the hall stands the golden tree Glasir, and the hall's ceiling is thatched with golden shields. Various creatures live around Valhalla, such as the stag Eikþyrnir and the goat Heiðrún, both described as standing atop Valhalla and consuming the foliage of the tree Læraðr. Valhalla is attested in the Poetic Edda, compiled in the 13th century from earlier traditional sources, the Prose Edda and Heimskringla (both written in the 13th century by Snorri Sturluson), and in stanzas of an anonymous 10th century poem commemorating the death of Eric Bloodaxe known as Eiríksmál as compiled in Fagrskinna. Valhalla has inspired various works of art, publication titles, and elements of popular culture, and has become a term synonymous with a martial (or otherwise) hall of the chosen dead.",
    schoolAddress: {
    streetAddress:"123 Bifrost Way",
    city:"Valhalla",
    state:"Asgaard",
    zipCode:"12345",
    },
    district: "Mount Diablo Unified School District",
    academicRating: 9,
    // create a function to avg the user rating
    userRating: 5,
    schoolImg:"school4.jpg",
    contactInfo: {
    phoneNumber: "(925) 687-1700",
    emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName:"Abraham Prep School",
    aboutSchool: "We'll put some happy little leaves here and there. Get away from those little Christmas tree things we used to make in school. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Let's make a nice big leafy tree. Give him a friend, we forget the trees get lonely too. We'll take a little bit of Van Dyke Brown. Be careful. You can always add more - but you can't take it away.",
    schoolAddress: {
      streetAddress:"2421 Shingleton Road",
      city:"Grand Rapids",
      state:"MI",
      zipCode:49503
    },
    district: "Alhambra Unified School District",
    academicRating: 9,
    userRating: 5,
    schoolImg:"school3.jpg",
    contactInfo: {
      phoneNumber: "(925) 687-1700",
      emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName:"Lincoln School",
    aboutSchool: "Let your heart be your guide. I think there's an artist hidden in the bottom of every single one of us. Little trees and bushes grow however makes them happy. Let's build an almighty mountain. Little short strokes. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. From all of us here, I want to wish you happy painting and God bless, my friends. Let your imagination just wonder around when you're doing these things. This is your world. Just make little strokes like that.",
    schoolAddress: {
      streetAddress:"2191 Zimmerman Lane",
      city:"Los Angeles",
      state:"CA",
      zipCode:90057
    },
    district: "Los Angeles Unified School District",
    academicRating: 9,
    // create a function to avg the user rating
    userRating: 5,
    schoolImg:"school2.jpg",
    contactInfo: {
      phoneNumber: "(925) 687-1700",
      emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName: "Petite Academy School",
    aboutSchool: "Maybe there's a happy little bush that lives right there. You can bend rivers. But when I get home, the only thing I have power over is the garbage. We don't have to be committed. We are just playing here. And maybe, maybe, maybe... Let's make some happy little clouds in our world. Painting should do one thing. It should put happiness in your heart. You create the dream - then you bring it into your world. At home you have unlimited time. Little short strokes. It's almost like something out of a fairytale book. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying.",
    schoolAddress: {
    streetAddress:"123 hollywood blvd",
    city:"Los Angeles",
    state:"CA",
    zipCode:94523
    },
    district: "Los Angeles Unified School District",
    academicRating: 6,
    // create a function to avg the user rating
    userRating: 3,
    schoolImg:"school1.jpg",
    contactInfo: {
    phoneNumber: "(562) 242-6356",
    emailAddress:"www.mdusd.org"
    }
  },
  {
    schoolName: "Woodland Park Middle School",
    aboutSchool: "At WPMS we deliver a rigorous curriculum that is aligned with current Colorado State Standards and the national core standards. We are consistently rated in the top four districts in Pikes Peak region and believe that we provide a quality education that is focused on academic growth, social growth and structured opportunities to explore student’s interests, passions and strengths. We provide a safe and focused educational experience through our ROAR principles: Respect, Ownership, Achievement and Relationship. In order to create an exceptional learning environment, we expect all staff, parents and students to abide by these principles.",
    schoolAddress: {
    streetAddress:"600 E Kelly Rd",
    city:"Woodland Park",
    state:"CO",
    zipCode:80863
    },
    district: "Woodland Park School District No. Re-2",
    academicRating: 10,
    // create a function to avg the user rating
    userRating: 5,
    schoolImg:"wpms.jpg",
    contactInfo: {
    phoneNumber: "(719) 686-2200",
    emailAddress:"http://www.wpsdk12.org/schools/wpms/"
    }
  },
  {
    schoolName:"General Assembly",
    aboutSchool: "Why General Assembly? We offer a transformative combination of educational rigor, dedicated in-house career coaching, and lasting connections. Our instructional designers craft coursework that's both dynamic and relevant, while GA instructors are trained to teach working professionals how to grow in their careers — or embark on new ones.",
    schoolAddress: {
      streetAddress:"225",
      city:"San Francisco",
      state:"CA",
      zipCode:94140
    },
    district: "N/A",
    academicRating: 10,
    userRating: 5,
    schoolImg:"ga.png",
    contactInfo: {
      phoneNumber: "",
      emailAddress:""
    }
  },
  {
    schoolName:"Schooly McSchoolface",
    aboutSchool: "Change the way you do business - adopt mobile propositions. Knowledge transfer synergies are becoming company-wide stakeholder experts. Efficiencies will come from strategically transforming our alignments. We aim to dynamically connect our standard setter by conservatively virtualising our customer-focused competitive stacks.",
    schoolAddress: {
      streetAddress:"225",
      city:"San Francisco",
      state:"CA",
      zipCode:94140
    },
    district: "Some School District",
    academicRating: 10,
    userRating: 5,
    schoolImg:"school5.jpg",
    contactInfo: {
      phoneNumber: "",
      emailAddress:""
    }
  },
  {
    schoolName:"Springfield Elementary",
    aboutSchool: "Lorem Simpson perfectly cromulent spiritual de-pantsing throughhole they tried that in the movies and it didn't work chestal unpossible we were eating rotisserie chicken brain burger with extra pus garbagewater saxamaphone well-wisher unpossible commie-nazis 0 days without a suicide and all who dwell within this rocket house eyeball stew forfty sophistimacated doowhackey one way passage to the boneyard beginualize that's why your robot never worked knowitallism oodily boostafazoo joy, excitement, looking liberty log steamed hams no, money down! i had to sell the trigger and most of the handle to feed my family just like in real life eyeball stew introubulate blubber-in-law milhousing squozen a law requiring ducks to wear long pants works on contingency? shiva h. vishnu liberty log nincompoop nuisancefon catsup diddily hot jazz music no ones pinching his legs swedish lunchbox crap factory smokesperson my children need wine esquilax wiggle puppy paraplegiarino sacrilicious tromboner rastafy land monster smokesperson deceleratrix jeremy's iron liberty log smuggled vegetables eat my shorts banana kaboom brassafrax",
    schoolAddress: {
      streetAddress:"123 Fake Street",
      city:"Springfield",
      state:"IL",
      zipCode:62670
    },
    district: "Springfield, probably",
    academicRating: 10,
    userRating: 5,
    schoolImg:"school6.jpg",
    contactInfo: {
      phoneNumber: "",
      emailAddress:""
    }
  },
  {
    schoolName:"Southpark Elementary",
    aboutSchool: "Change the way you do business - adopt mobile propositions. Knowledge transfer synergies are becoming company-wide stakeholder experts. Efficiencies will come from strategically transforming our alignments. We aim to dynamically connect our standard setter by conservatively virtualising our customer-focused competitive stacks.",
    schoolAddress: {
      streetAddress:"100 panther way",
      city:"woodland park",
      state:"Co",
      zipCode:80863
    },
    district: "Southpark School District",
    academicRating: 10,
    userRating: 5,
    schoolImg:"southpark.gif",
    contactInfo: {
      phoneNumber: "",
      emailAddress:""
    }
  },
  {
    schoolName:"Schooly McSchoolface 4",
    aboutSchool: "Change the way you do business - adopt mobile propositions. Knowledge transfer synergies are becoming company-wide stakeholder experts. Efficiencies will come from strategically transforming our alignments. We aim to dynamically connect our standard setter by conservatively virtualising our customer-focused competitive stacks.",
    schoolAddress: {
      streetAddress:"225",
      city:"San Francisco",
      state:"CA",
      zipCode:94140
    },
    district: "N/A",
    academicRating: 10,
    userRating: 5,
    schoolImg:"school8.jpg",
    contactInfo: {
      phoneNumber: "",
      emailAddress:""
    }
  },
];

const myUsers = [
  {
    userName:"yanniB",
    password: "touratoura",
    role: "admin",
    createdUserDate: 10-14-2019,
    avatar: "something here"
  },
  {
    userName:"Miket",
    password: "tou",
    role: "user",
    createdUserDate: 09-13-2019,
    avatar: "something here"
  },
  {
    userName:"walrus",
    password: "tusks",
    role: "admin",
    createdUserDate: 09-13-2019,
    avatar: "something here"
  },
  {
    userName:"rando",
    password: "calrissian",
    role: "user",
    createdUserDate: 09-13-2019,
    avatar: "something here"
  },
  {
    userName:"johnQ",
    password: "public",
    role: "user",
    createdUserDate: 09-13-2019,
    avatar: "something here"
  },
];

const myRatings = [
  {
    rating: 5,
    comments: "very happy with this scholl",
    ratingDate: "2018-2-11",
    user: "yanniB",
    school: "Valhalla Elementary School"
  },
  {
    rating: 3,
    comments: "this school is a mess",
    ratingDate: "2018-3-12",
    user: "Miket",
    school: "Valhalla Elementary School"
  },
  {
    rating: 1,
    comments: "worst steakhouse I've ever been too",
    ratingDate: "2018-3-12",
    user: "rando",
    school: "Petite Academy School"
  },
  {
    rating: 3,
    comments: "this school is a mess",
    ratingDate: "2018-3-12",
    user: "johnQ",
    school: "Valhalla Elementary School"
  },
  {
    rating: 5,
    comments: "I actually went to school here",
    ratingDate: "2018-3-12",
    user: "walrus",
    school: "Woodland Park Middle School"
  },
]

db.Schools.deleteMany({}, (err, schools) => {
  console.log('remove all schools');
  
  //create the schools first
  db.Schools.create(mySchools, (err, schools) => {
    if(err) { console.log(err); }
    console.log('created all schools');
    console.log(`created ${schools.length} schools`);
  
    /// create the users
    db.Users.deleteMany({},(err, users) => {
      if (err) { console.log('Error occurred in remove', err) } 
      console.log('removed all users from the users list');
      
      // create new records based on the array myUsers
      db.Users.create(myUsers, function(err, users){
        if (err) { return console.log('err', err) }
        console.log("created", users.length, "users");
        console.log(users);

        db.Ratings.deleteMany({}, (err, ratings)=>{
          if(err) { console.log('Error occurred in remove', err) } 
          console.log('removed all ratings');
      
          myRatings.forEach(ratingData => {
            let newRating = new db.Ratings({
              rating: ratingData.rating,
              comments: ratingData.comments,
              ratingDate: ratingData.ratingDate
            });  
      
            // look for school
            db.Schools.findOne({ schoolName: ratingData.school}, (err, foundSchool)=>{
              if (err) { console.log(err) }
              newRating.school = foundSchool;
      
              /// look for user
              db.Users.findOne({ userName: ratingData.user}, (err, foundUser) => {
                if (err) { console.log(err) }
                newRating.user = foundUser;
      
                newRating.save((err, savedRating) => {
                  if (err) { console.log(err) }
                  console.log(savedRating);
                  console.log('saved!!!');
                });
              });
            });
          });
        });
      });
    });
  });
});
