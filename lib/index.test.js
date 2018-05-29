const ObjectUnderTest = require('./index')

describe('distributedLock', () => {
  describe('lock', () => {
    it('should call gcloud w/ expected args', async () => {
      jest.setTimeout(120000)
      const objectUnderTest = new ObjectUnderTest({
        projectId: 'eoh-prod',
        keyFilename: `${__dirname}/keyfile.json`
      })

      await objectUnderTest.lock('test')
    })
  })
})
