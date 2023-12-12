# Hackathon 1000DEVs 2023

The project in question was built as a requirement for the completion of the hackathon created by the 1000DEVs program, a partnership between mesttra, Johnson & Johnson Medtech and Albert Einstein Hospital. In the hackathon in question, we were challenged to create an API responsible for consuming a cloud database with data whose main theme was vaccination.

## Overview

### The Challenge

- Development of a **REST API** using **Node.js** to serve as the backend for a digital vaccination wallet. The API should be capable of performing all operations for registering and searching relevant information.

#### Activities:

1. **Patient Management**: Creation of APIs for registering, updating, and searching individuals recorded in the vaccination wallet.
   - **API for registering people**
   - **API for updating people**
   - **API for searching by person**

2. **Vaccination Record Management**: Administration of vaccines received by each individual.
   - **API for registering applied vaccines**
   - **API for deleting vaccination records**
   - **API for searching applied vaccines**

3. **Vaccine Information Query**: Access to complete vaccine information, including application periods and associated networks.
   - **API for vaccine search**

4. **Vaccine Query by Age**: Vaccine search based on an individual's age, with options for exact search or up to a certain age.
   - **API for vaccine search by year (exact)**
   - **API for vaccine search by year (up to)**
   - **API for vaccine search by month (exact)**
   - **API for vaccine search by month (up to)**

5. **Vaccine Query by Protection**: Vaccine search based on the protection they offer.
   - **API for vaccine search by protection**

6. **Vaccine Query by Patient**: Query of vaccines taken by a specific patient and pending vaccines.
   - **API for vaccine search by patient**
   - **API for pending vaccine search for a patient**

7. **Vaccination Campaign Management**: Administration of vaccination campaigns and the vaccines associated with them.
   - **API for registering campaigns**
   - **API for editing campaigns**
   - **API for registering vaccines in a campaign**
   - **API for deleting vaccines from a campaign**
   - **API for campaign search by date**
   - **API for campaign search by vaccine protection**

8. **Swagger Configuration**: Implementation of Swagger for clear and accessible documentation of the developed APIs.

Each activity has been meticulously designed to ensure a comprehensive and effective solution for vaccination data management, providing a valuable tool for public health.

## Process

### Built with

- Node.js
- Express
- Postgres

### See how it turned out: 

- https://teste2-production.up.railway.app/swagger-ui/#/

