pipeline {
  agent {label 'linux'}
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  stages {
    stage('Hello') {
      steps {
        echo "Hello World"
      }
    }
  }
}