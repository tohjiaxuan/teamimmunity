import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'
import firebase from 'firebase';

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
          labels: ['Java','Javascript','Python'],
          datasets: [{
            label: "No. of hints",
            backgroundColor: [],
            data: []
          }]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: "Difficulty Level: Easy"
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }],
            xAxes: [{

            }]
          },
          responsive: true,
          maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function() {
      var user = firebase.auth().currentUser;
      db.collection('users').doc(user.uid).collection('easy exercises hint').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data().hint)
          this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
          this.datacollection.datasets[0].data.push(doc.data().hint)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created() {
    this.fetchItems()
  }
}