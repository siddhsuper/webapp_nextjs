pipeline {
    agent any
    stages {
        stage('Build Webapp') { 
            steps {
                sh 'npm install' 
                sh 'npm run dev' 
            }
        }
    }
}