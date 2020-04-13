import { Line } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            datasets: [{
              label:[],
              borderColor: "#3e95cd",
              data: [],
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
      db.collection('users').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.datacollection.datasets.label.push(doc.data().rank)
          this.datacollection.datasets.data.push(doc.data().rank)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}

