const db = require('./db');
require('./db/models');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const students = [
  { name: 'Gabe' },
  { name: 'Ashi' },
  { name: 'Khan' },
  { name: 'Bender' },
  { name: 'Q' },
  { name: 'GeoffRay' },
  { name: 'Latika' },
  { name: 'Saluja' },
  { name: 'Cressida' },
  { name: 'Damien' },
  { name: 'Conan' },
  { name: 'Grimaldi' },
  { name: 'Hamish' },
  { name: 'Elle' },
  { name: 'Barbara' },
  { name: 'Lacey' },
  { name: 'Sara' },
  { name: 'Kitty' },
  { name: 'Denise' },
  { name: 'Darrell' },
  { name: 'Flounder' },
  { name: 'Moab' },
  { name: 'Jenkins' },
  { name: 'Eleni' },
  { name: 'Katrina' },
  { name: 'Patrice' },
  { name: 'Kay' },
  { name: 'Kendall' },
  { name: 'Kennedy' },
  { name: 'Sophie' },
  { name: 'Lori' },
  { name: 'Donna' },
  { name: 'Fiona' },
  { name: 'Demetreus' },
  { name: 'Jordi' },
  { name: 'Rhea' },
  { name: 'Sheila' },
  { name: 'Carmen' },
  { name: 'Bellatrix' },
  { name: 'Viola' },
  { name: 'Picard' },
  { name: 'Nellie' },
  { name: 'Idina' },
  { name: 'Sassy' },
  { name: 'Omar' },
  { name: 'Yatin' },
  { name: 'Yeti' },
  { name: 'Newton' },
  { name: 'Falkner' },
  { name: 'Ursula' },
  { name: 'Gene' },
  { name: 'Ollie' },
  { name: 'Jamieson' },
  { name: 'Quentin' },
  { name: 'Blake' },
  { name: 'Bernard' },
  { name: 'Vera' },
  { name: 'Wang' },
  { name: 'Wendy' },
  { name: 'Darling' },
  { name: 'Horace' },
  { name: 'Drusilla' },
  { name: 'Anastasia' },
  { name: 'Tash' },
  { name: 'Priscilla' },
  { name: 'Beanie' },
  { name: 'Twirlface' },
  { name: 'Chrisola' },
  { name: 'Rooster' },
  { name: 'Butterfly' },
  { name: 'Sylvia' },
  { name: 'Mandy' },
  { name: 'Mindy' },
  { name: 'Candy' },
  { name: 'Cindy' },
  { name: 'Xavier' },
  { name: 'Arden' },
  { name: 'Aaron' },
  { name: 'Gilly' },
  { name: 'Gilead' },
  { name: 'Henry' },
  { name: 'Arnie' },
  { name: 'Jimbo' },
  { name: 'Coxworth' },
  { name: 'Karen' },
  { name: 'Kronos' },
  { name: 'Rhea' },
  { name: 'Dean' },
  { name: 'Shawn' },
  { name: 'Iapetus' },
  { name: 'Oceanus' },
  { name: 'Coeus' },
  { name: 'Creus' },
  { name: 'Theia' },
  { name: 'Mnemosyne' },
  { name: 'Phoebe' },
  { name: 'Tethys' },
  { name: 'Themis' },
  { name: 'Prometheus' },
  { name: 'Atlas' },
  { name: 'Hecate' },
  { name: 'Selene' },
  { name: 'Zeus' },
  { name: 'Helios' },
  { name: 'Hera' },
  { name: 'Athena' },
  { name: 'Madison' },
  { name: 'Casey' },
  { name: 'Zambolina' },
  { name: 'Claymore' },
  { name: 'Ziegfried' },
  { name: 'Godfrey' },
  { name: 'Samson' },
  { name: 'Delilah' },
  { name: 'Vanguard' },
  { name: 'Valhalla' },
  { name: 'Benito' },
  { name: 'Rochelle' },
  { name: 'Madison' },
];

const campuses = [{
  name: 'Titan',
  image: '/images/1.png'
}, {
  name: 'Luna',
  image: '/images/22.png'
}, {
  name: 'Terra',
  image: '/images/3.png'
}, {
  name: 'Mars',
  image: '/images/23.png'
}, {
  name: 'Jupiter',
  image: '/images/5.png'
}, {
  name: 'Venus',
  image: '/images/24.png'
}, {
  name: 'Europa',
  image: '/images/7.png'
}, {
  name: 'Ganymede',
  image: '/images/8.png'
}, {
  name: 'Metis',
  image: '/images/9.png'
}, {
  name: 'Thebe',
  image: '/images/25.png'
}, {
  name: 'Hyperion',
  image: '/images/11.png'
}, {
  name: 'Pandora',
  image: '/images/21.png'
}, {
  name: 'Caliban',
  image: '/images/13.png'
}, {
  name: 'Desdemona',
  image: '/images/14.png'
}, {
  name: 'Prospero',
  image: '/images/15.png'
}, {
  name: 'Thalassa',
  image: '/images/16.png'
}, {
  name: 'Charon',
  image: '/images/17.png'
}, {
  name: 'Pluto',
  image: '/images/27.png'
}];


let seededStudents

const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student)
  ))
  .then((createdStudents) => {
    seededStudents = createdStudents
  })
  .then(() =>
    Promise.all(campuses.map(campus =>
      Campus.create(campus)
    )
  ))
  .then((createdCampuses) =>
    Promise.all(seededStudents.map(student =>
      student.setCampus(createdCampuses[Math.floor(Math.random() * createdCampuses.length)])
    ))
  )


const main = () => {
  console.log('Syncing db...');
  db.didSync
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
