import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            datasets: [{
              label:[],
              backgroundColor: [],
              borderColor: [],
              data: [],
              borderWidth: 0.5
            }]
        },
        options: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Take a look at the exericises most people are doing!'
          }, 
          scales: {
            yAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Number of Exercises Completed"
              }
            }],
            xAxes: [{ 
              scaleLabel: {
                display: true,
                labelString: "Programming Language"
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
        db.collection('clicks')
        .doc('exercise_java_easy_1')
        .get()
        .then(snapshot => {
            const document = snapshot.data().clicks
            this.datacollection.datasets[0].data.push(document)
        }),
      db.collection('clicks').get().then(querySnapShot => {
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

