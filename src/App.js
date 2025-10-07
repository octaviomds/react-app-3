import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                ECORIDE
              </h1>
              Demo<span className="text-gray-600">App</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                  Présentation de EcoRide
                </h2>
                <p className="text-center text-xl mb-8">
                    La startup "EcoRide" est une plateforme de covoiturage pour les voyageurs soucieux de 
                    l'environnement qui recherchent une solution économique pour leurs déplacements.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Le covoiturage</h3>
                      <p>
                        EcoRide propose le covoiturage à courte distance pour les trajets entre domicile et travail, 
                        le covoiturage s'effectue entre personnes de la même entreprise, université. Afin de répondre aux 
                        objectifs de réduction des émissions de carbone, EcoRide propose des solutions pour le 
                        covoiturage du quotidien et des solutions à l'utilisation individuelle de la voiture pour vos 
                        déplacements vers votre travail, votre lieu d'études, vos loisirs, vos courses.
                      </p>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        La mobilité du covoiturage et l'écosystème
                      </h3>
                      <p>
                        Dans nos relations à l'écosystème, (clients, covoitureurs, partenaires, fournisseurs), 
                        nous prenons soin d'anticiper les besoins et les demandes. Nous valorisons le principe où 
                        chacun tire son intérêt d'un résultat collectif. Nous mettons un point d'honneur à 
                        promouvoir une politique d'entreprise favorable à la mobilité durable. Nous traitons de 
                        manière minutieuse tous les retours de nos utilisateurs dans un esprit d'entraide et de 
                        solidarité. Nous écoutons chaque partie prenante, ses contraintes, ses besoins pour 
                        proposer des solutions à la fois aux covoitureurs et aux voyageurs.
                      </p>
                      <h2 className="text-4xl font-bold text-gray-800">Réservation</h2>
              <p className="text-xl text-gray-600">Réservez votre trajet en covoiturage</p>
            
              <span className="font-medium text-gray-700">Twitter</span>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                <li><a href=" " className="hover:text-green-400 transition-colors">Accueil</a></li>
                <li><a href=" " className="hover:text-green-400 transition-colors">Réservation</a></li>
                <li><a href=" " className="hover:text-green-400 transition-colors">Contact</a></li>  
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="flex items-center">
                  contact@ecoride.com
                </p>
                <p className="flex items-center">
                  +33 1 23 45 67 89
                </p>
                <p>&copy; 2024 EcoRide. Tous droits réservés.</p>
              <a
               className="App-link"
                href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
