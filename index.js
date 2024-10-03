import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      vorname: 'Max',
      nachname: 'Mustermann',
      email: 'max.mustermann@example.com',
    },
    {
      id: 2,
      vorname: 'Julia',
      nachname: 'Musterfrau',
      email: 'julia.musterfrau@example.com',
    },
    {
      id: 3,
      vorname: 'Lukas',
      nachname: 'Schneider',
      email: 'lukas.schneider@example.com',
    },
    {
      id: 4,
      vorname: 'Anna',
      nachname: 'Bauer',
      email: 'anna.bauer@example.com',
    },
    {
      id: 5,
      vorname: 'Tim',
      nachname: 'Fischer',
      email: 'tim.fischer@example.com',
    },
    {
      id: 6,
      vorname: 'Laura',
      nachname: 'Weber',
      email: 'laura.weber@example.com',
    },
    {
      id: 7,
      vorname: 'Tom',
      nachname: 'Schmidt',
      email: 'tom.schmidt@example.com',
    },
    {
      id: 8,
      vorname: 'Marie',
      nachname: 'Wagner',
      email: 'marie.wagner@example.com',
    },
    {
      id: 9,
      vorname: 'Leon',
      nachname: 'Hoffmann',
      email: 'leon.hoffmann@example.com',
    },
    {
      id: 10,
      vorname: 'Sophie',
      nachname: 'Klein',
      email: 'sophie.klein@example.com',
    },
  ]);
});

app.listen(3000, () => console.log('listening to localhost:80'));
