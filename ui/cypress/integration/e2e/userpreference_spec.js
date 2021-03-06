describe('User Preferences', () => {
  describe('Analytics and Improvement Program', () => {
    beforeEach(() => {
      cy.route2('GET', '/api/user/stats').as('getUserStats')

      cy.selectProviderNone()

      cy.visit('/user/preferences')
      cy.get('.MuiFormLabel-root').should('have.text', 'Analytics and Improvement Program')
      cy.wait('@getUserStats')
    })

    it('deactivates "Send Anonymous Usage Statistics"', () => {
      cy.route2('POST', '/api/user/stats').as('postUserStats')

      cy.get('[data-cy="UsageStatsPreference"]').click()
      cy.wait('@postUserStats')
      cy.get('[data-cy="UsageStatsPreference"]').should('not.have.class', 'Mui-checked')
    })

    it('activates "Send Anonymous Usage Statistics"', () => {
      cy.route2('POST', '/api/user/stats').as('postUserStats')

      cy.get('[data-cy="UsageStatsPreference"]').click()
      cy.wait('@postUserStats')
      cy.get('[data-cy="UsageStatsPreference"]').should('have.class', 'Mui-checked')
    })

    it('deactivates "Send Anonymous Performance Results"', () => {
      cy.route2('POST', '/api/user/stats').as('postUserStats')

      cy.get('[data-cy="PerfResultPreference"]').click()
      cy.wait('@postUserStats')
      cy.get('[data-cy="PerfResultPreference"]').should('not.have.class', 'Mui-checked')
    })

    it('activates "Send Anonymous Performance Results"', () => {
      cy.route2('POST', '/api/user/stats').as('postUserStats')

      cy.get('[data-cy="PerfResultPreference"]').click()
      cy.wait('@postUserStats')
      cy.get('[data-cy="PerfResultPreference"]').should('have.class', 'Mui-checked')
    })
  })
})
