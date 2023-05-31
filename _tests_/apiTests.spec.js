const request = require('supertest')
const { createRequest, createResponse } = require('node-mocks-http')
const apiRouter = require('../src/routes/apiRoutes') // Import our routes
const { getStudentConsultationDetails, getStudentDetails } = require('../src/services/student_consulation_service.js')
const insertService = require('../src/services/insert_service')
const lecturerService = require('../src/services/lecturer_service')
const consultationService = require('../src/services/consultation_service')
const consultationPeriodService = require('../src/services/consultation_period_service')
const studentConsulationService = require('../src/services/student_consulation_service')
const { getStudentByNumber, getBookingsByConsultationId } = require('../src/services/student_service.js') // Import our service funciton

jest.mock('../src/services/lecturer_service.js')
jest.mock('../src/services/student_consulation_service.js')
jest.mock('../src/services/insert_service.js')
jest.mock('../src/services/consultation_period_service.js')
jest.mock('../src/services/student_service.js')
jest.mock('../src/services/consultation_service.js')

describe('GET /api/studentConsultationDetails', () => {
  // Mock the getStudentConsultationDetails
  studentConsulationService.getStudentConsultationDetails.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@students.wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/studentConsultationDetails',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/bookingsByConsultationId', () => {
  // Mock the getBookingsByConsultationId
  getBookingsByConsultationId.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@students.wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/bookingsByConsultationId',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/student', () => {
  // Mock the getStudentByNumber
  getStudentByNumber.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@students.wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/student',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/consultationDetailsSearch', () => {
  // Mock the getConsultationDetailsByLecturer
  consultationService.getConsultationDetailsByLecturer.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/consultationDetailsSearch',
      oidc: {
        user: {
          email: userEmail
        },
      },
      query: {
        lecturerId: 'dude@wits.ac.za'
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/consultationPerLecturerSearch', () => {
  // Mock the searchConsultationDetails
  consultationService.searchConsultationDetails.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/consultationPerLecturerSearch',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/consultationDetailSearchByID/:id', () => {
  // Mock the getConsultationDetailsByID
  consultationService.getConsultationDetailsByID.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/consultationDetailSearchByID/4',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/consultationDetailSearchByLecID/:lecturer_id', () => {
  // Mock the getConsultationDetails
  consultationService.getConsultationDetailsByLecID.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/consultationDetailSearchByLecID/dude@wits.ac.za',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/consultationDetailSearch', () => {
  // Mock the getConsultationDetails
  consultationService.getConsultationDetails.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@students.wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/consultationDetailSearch',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/consultationPeriodsSearch', () => {
  // Mock the getConsultationPeriods function
  lecturerService.getConsultationPeriods.mockResolvedValue([{ mockReturn: 'returned the correct object' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@students.wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/consultationPeriodsSearch',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ mockReturn: 'returned the correct object' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/existingConsultationPeriods/:lecturerID', () => {
  // Mock the getExistingConsultationPeriods
  consultationPeriodService.getExistingConsultationPeriods.mockResolvedValue([{ _id: '646f7b0f0c9daeadf95f7c70', emailAddress: 'dude@wits.ac.za', firstName: 'dude', lastName: 'white' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/existingConsultationPeriods/dude@wits.ac.za',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ _id: '646f7b0f0c9daeadf95f7c70', emailAddress: 'dude@wits.ac.za', firstName: 'dude', lastName: 'white' }]) //Compare the returned value to the mocked response
  })
})


describe('GET /api/lecturerDetails', () => {
  // Mock the getLecturerDetails function
  lecturerService.getLecturerDetails.mockResolvedValue([{ _id: '646f7b0f0c9daeadf95f7c70', emailAddress: 'dude@wits.ac.za', firstName: 'dude', lastName: 'white' }])

  it('should return 200 OK ', async () => {
    const userEmail = 'dude@wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/lecturerDetails',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ _id: '646f7b0f0c9daeadf95f7c70', emailAddress: 'dude@wits.ac.za', firstName: 'dude', lastName: 'white' }]) //Compare the returned value to the mocked response
  })
})

describe('GET /api/userStudentNumber', () => {
  it('should return 200 OK', async () => {
    const userEmail = '2351852@students.wits.ac.za'

    const req = createRequest({ // Create a mock request object, including oauth0 oicd user object
      method: 'GET',
      url: '/api/userStudentNumber',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    apiRouter(req, res)// Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200) // Assert that we get a 200 OK status code
  })
  it('should return 400 for invalid student email', async () => {
    const userEmail = '2351852@student'

    const req = createRequest({
      method: 'GET',
      url: '/api/userStudentNumber',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()
    apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(400) // Assert that we get a 400 error as email is not correct
  })
})

describe('GET /api/studentDetails', () => {
  // Mock the getStudentDetails function to return a predefined student number
  getStudentDetails.mockResolvedValue([{ _id: '646f7b0f0c9daeadf95f7c70', studentNumber: '2351852', emailAddress: 'john@students.wits.ac.za', firstName: 'John', lastName: 'Sparrow' }])

  it('should return 200 OK ', async () => {
    const userEmail = '2351852@students.wits.ac.za'

    const req = createRequest({
      method: 'GET',
      url: '/api/studentDetails',
      oidc: {
        user: {
          email: userEmail
        },
      }
    })

    const res = createResponse()

    await apiRouter(req, res) // Use the router function from apiRoutes.js
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual([{ _id: '646f7b0f0c9daeadf95f7c70', studentNumber: '2351852', emailAddress: 'john@students.wits.ac.za', firstName: 'John', lastName: 'Sparrow' }])
  })
})

// const app = require('../index.js');

// describe('GET /api/testPipeline', () => {
//     it('should return 200 ', async () => {
//         const response = await request(app).get('/class/api/testPipeline');
//         expect(response.status).toBe(200) // Assert that we get a 200 OK status code
//         const data = response.body
//         expect(data).toBeInstanceOf(Array) // Assert that data is an array

//         // Check if the first object in the array has the expected fields
//         const firstItem = data[0]
//         expect(firstItem).toHaveProperty('_id')
//         expect(firstItem).toHaveProperty('consultationId')
//         expect(firstItem).toHaveProperty('lecturerId')

//     }
//     )
//     it('should return 404 if an error occurs', async () => {
//         const response = await request(app).get('/class/api/testPipelin')
//         expect(response.status).toBe(404)
//         expect(response.body).toEqual({})
//     })
// })