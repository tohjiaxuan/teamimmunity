import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            datasets: []
        },
        options: {
          legend: { display: true},
          title: {
            display: true,
            text: 'Look at the number of Python exercises other users have completed'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Number of completed exercises"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Type of Exercise"
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
      db.collection('python exercises activity').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          var newDataset = {
            label: doc.data().type,
            backgroundColor: "#3cba9f",
            data: []
        }
        newDataset.data.push(doc.data().clicks)
        this.datacollection.datasets.push(newDataset)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}