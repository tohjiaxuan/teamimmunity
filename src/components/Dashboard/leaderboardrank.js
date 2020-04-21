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
            text: 'Take a look at your Rank progress!'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Rank"
              },
              ticks: {
                reverse: true
              }
            }],
            xAxes: [{ 
              data:[],
              scaleLabel: {
                display: true,
                labelString: "Date"
              }
            }]
          },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    // formatDate: function(date) {
    //   return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    // },
    // fetchItems: function () {
    //   var user = firebase.auth().currentUser;
    //   db.collection('users').get().then(querySnapShot => {
    //     querySnapShot.forEach(doc => {
    //       if (user.email == doc.data().email) {
    //         let date = Date(Date.now())
    //         let today = moment(date).format('DD/MM/YYYY');
    //         this.datacollection.labels.push(today)
    //         console.log(doc.data().prevRank)
    //         // this.datacollection.datasets[0].data.push(doc.data().rank)
    //         doc.data().prevRank.forEach(x => this.datacollection.datasets[0].data.push(x))
    //       }
    //     })
    //     this.renderChart(this.datacollection, this.options)
    //   })
    // }
    fetchItems: function () {
      var user = firebase.auth().currentUser;

      db.collection('users').get().then(querySnapShot => {
        let rank=null
        querySnapShot.forEach(doc => {
          if (user.email == doc.data().email) {
            doc.data().prevRank.slice(1,).forEach(x => {
              this.datacollection.labels.push(x.date)
              this.datacollection.datasets[0].data.push(x.rank)
            })
            rank = doc.data().rank
          }
        })
        let date = Date(Date.now())
        let today = moment(date).format('DD/MM/YYYY');
        this.datacollection.labels.push(today)
        this.datacollection.datasets[0].data.push(rank)
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}
