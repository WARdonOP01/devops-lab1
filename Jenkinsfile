pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-lab1-app:latest .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker rm -f devops-lab1 || true'
                sh 'docker run -d --name devops-lab1 -p 3000:3000 devops-lab1-app:latest'
            }
        }

        stage('Verify Application') {
            steps {
                sh "docker inspect --format='{{.State.Running}}' devops-lab1 | grep true"
            }
        }
    }
}
