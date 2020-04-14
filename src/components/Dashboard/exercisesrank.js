import { Bubble } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            datasets: [{
              label:[],
              backgroundColor: [],
              borderColor: [],
              data: []
            }]
        },
        options: {
          legend: { display: true},
          title: {
            display: true,
            text: 'GDP, happiness and population'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Happiness"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "GDP (PPP)"
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
      db.collection('countries').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.datacollection.datasets[0].label.push(doc.data().country)
          this.datacollection.datasets[0].backgroundColor.push(doc.data().backgroundColor)
          this.datacollection.datasets[0].borderColor.push(doc.data().borderColor)
          this.datacollection.datasets[0].data.push(doc.data().data)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}