import { Line } from 'vue-chartjs'
import db from '../../firebase.js'
import firebase from 'firebase';

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            datasets: [{
              label:[],
              borderColor: "#3e95cd",
              data: [],
              fill: false
            }]
        },
        options: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Look at your rank'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Rank"
              }
            }],
            xAxes: [{ 
              data:[],
              scaleLabel: {
                display: true,
                labelString: "Day"
              }
            }]
          },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      var user = firebase.auth().currentUser;
      db.collection('users').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          if (user.email == doc.data().email) {
            this.datacollection.datasets[0].label.push(doc.data().name)
            this.datacollection.datasets[0].data.push(doc.data().rank)
          }
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}
