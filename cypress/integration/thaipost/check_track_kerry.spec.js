/// <reference types="Cypress" />

context('ตรวจสอบถานะสินค้า Kerry', () => {
  beforeEach(() => {
    cy.visit('https://th.kerryexpress.com/th/track/')
  })

  it('ทดสอบแบบใส่เลขที่สถานะ นำจ่ายสำเร็จ(SHP4055542296)', () => {
    cy.get('#track')
      .type('SHP4055542296').should('have.value', 'SHP4055542296')
    cy.get('.btn').click()
    cy.get('.line > span')
      .should(($line) => {
        expect($line).to.have.length(5)
        expect($line.eq(0)).to.contain('SHP4055542296')
        expect($line.eq(1)).to.contain('04 ธ.ค. 2562')
        expect($line.eq(2)).to.contain('')
        expect($line.eq(3)).to.contain('oye_shop')
        expect($line.eq(4)).to.contain('ณัฐญา ชุติบุตร')
      })
    cy.get('.d1')
      .should(($d1) => {
        expect($d1).to.have.length(5)
        expect($d1.eq(0)).to.contain('ปลายทางได้รับเรียบร้อยแล้ว')
      })
  })

  it('ทดสอบแบบใส่เลขที่ไม่สามารถตรวจสอบได้ (SHP40555422961)', () => {
    cy.get('#track')
      .type('SHP40555422961').should('have.value', 'SHP40555422961')
    cy.get('.btn').click()
    cy.get('#trackArea').contains('Shipment not found!')
  })
  
})
