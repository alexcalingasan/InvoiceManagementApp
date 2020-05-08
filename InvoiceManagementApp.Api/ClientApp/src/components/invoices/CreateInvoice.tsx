import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Card, CardBody, Row, Col, Input, FormGroup, Label } from 'reactstrap'
import { CreateInvoiceCommand, DiscountType, TaxType, InvoiceItemVm } from '../../utils/api';
import moment from 'moment';

interface ICreateInvoice {

}

const CreateInvoice: React.FC<ICreateInvoice> = ({ }) => {
  const [selectedDateFocus, setSelectedDateFocus] = useState<boolean | null>(false);
  const [selectedDueDateFocus, setSelectedDueDateFocus] = useState<boolean | null>(false);
  const initValue = new CreateInvoiceCommand({
    invoiceNumber: '',
    logo: '',
    from: '',
    to: '',
    date: undefined,
    paymentTerms: '',
    dueDate: undefined,
    discount: undefined,
    discountType: DiscountType.Percentage,
    tax: undefined,
    taxType: TaxType.Percentage,
    amountPaid: undefined,
    invoiceItems: [new InvoiceItemVm({ id: 0, item: '', quantity: undefined, rate: undefined, amount: 0 })]
  });

  const [invoiceData, setInvoiceData] = useState<CreateInvoiceCommand>(initValue);
  return (
    <div className="col-md-12">
      <Card>
        <CardBody>
          <Row>
            <Col md={6}>
              <Input
                type="text"
                placeholder="Logo image url"
                style={{ display: 'block', marginBottom: '20px' }}
                value={invoiceData.logo}
                onChange={(evt: any) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, logo: evt.target.value }))}
              />
              <Input
                type="textarea"
                placeholder="Who is this invoice from? (required)"
                style={{ display: 'block', resize: 'none', marginBottom: '20px' }}
                value={invoiceData.from}
                onChange={(evt: any) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, from: evt.target.value }))}
              />
              <Input
                type="textarea"
                placeholder="Who is this invoice to? (required)"
                style={{ display: 'block', resize: 'none', marginBottom: '20px' }}
                value={invoiceData.to}
                onChange={(evt: any) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, to: evt.target.value }))}
              />
            </Col>
            <Col md={6}>
              <FormGroup row>
                <Label md={4}>Invoice #</Label>
                <Col md={8}>
                  <Input type="text"
                    placeholder="Invoice number"
                    value={invoiceData.invoiceNumber}
                    onChange={(evt: any) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, invoiceNumber: evt.target.value }))} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={4}>Date</Label>
                <Col md={8}>
                  <SingleDatePicker
                    placeholder="Date"
                    isOutsideRange={() => false}
                    id="date-picker"
                    small={true}
                    block={true}
                    numberOfMonths={1}
                    date={invoiceData.date ? moment(invoiceData.date) : null}
                    onDateChange={(date) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, date: date ? date.toDate() : undefined }))}
                    focused={selectedDateFocus}
                    onFocusChange={({ focused }) => setSelectedDateFocus(focused)}
                    hideKeyboardShortcutsPanel={true}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={4}>Payment Terms</Label>
                <Col md={8}>
                  <Input type="text"
                    placeholder="Payment terms"
                    value={invoiceData.paymentTerms}
                    onChange={(evt: any) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, paymentTerms: evt.target.value }))} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={4}>Due Date</Label>
                <Col md={8}>
                  <SingleDatePicker
                    placeholder="Due date"
                    isOutsideRange={() => false}
                    id="due-date-picker"
                    small={true}
                    block={true}
                    numberOfMonths={1}
                    date={invoiceData.dueDate ? moment(invoiceData.dueDate) : null}
                    onDateChange={(date) => setInvoiceData(new CreateInvoiceCommand({ ...invoiceData, dueDate: date ? date.toDate() : undefined }))}
                    focused={selectedDueDateFocus}
                    onFocusChange={({ focused }) => setSelectedDueDateFocus(focused)}
                    hideKeyboardShortcutsPanel={true}
                  />
                </Col>
              </FormGroup>
              <Row>
                <Label md={4} style={{ fontWeight: 'bold' }}>Balance</Label>
                <Label md={8} style={{ fontWeight: 'bold' }}>8000</Label>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default CreateInvoice
