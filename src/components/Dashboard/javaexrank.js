import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            datasets: [{
              label:[],
              backgroundColor: "#c45850",
              borderWidth: 1,
              data: []
            }]
        },
        options: {
          legend: { display: true},
          title: {
            display: true,
            text: 'Look at the number of Java exercises other users have completed'
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
      db.collection('java exercises activity').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
            var newDataset = {
                label: doc.data().type,
                backgroundColor: "#c45850",
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