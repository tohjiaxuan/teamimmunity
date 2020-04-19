import { Line } from 'vue-chartjs'
import db from '../../firebase.js'
import firebase from 'firebase';
import moment from "moment"

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
          labels:  [],
          datasets: [{
            label:  "Rank",
            borderColor: "#3e95cd",
            data: [],
            fill: false
          }]
        },
        options: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Take a look at your rank!'
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
            responsive: false,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    formatDate: function(date) {
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    fetchItems: function () {
      var user = firebase.auth().currentUser;
      db.collection('users').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          if (user.email == doc.data().email) {
            let date = Date(Date.now())
            let today = moment(date).format('DD/MM/YYYY');
            this.datacollection.labels.push(today)
            // this.datacollection.datasets[0].label.push(doc.data().name)
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
