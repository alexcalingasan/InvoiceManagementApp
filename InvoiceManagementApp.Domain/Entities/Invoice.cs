using InvoiceManagementApp.Domain.Common;
using InvoiceManagementApp.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace InvoiceManagementApp.Domain.Entities
{
    public class Invoice: AuditEntity
    {
        public Invoice()
        {
            this.InvoiceItems = new List<InvoiceItem>();
        }
        public int Id { get; set; }
        public string InvoiceNumber { get; set; }
        public string Logo { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime Date { get; set; }
        public string PaymentTerms { get; set; }
        public DateTime? DueDate { get; set; }
        public double Discount { get; set; }
        public DiscountType DiscountType { get; set; }
        public double Tax { get; set; }
        public TaxType TaxType { get; set; }
        public double AmountPaid { get; set; }
        public IList<InvoiceItem> InvoiceItems { get; set; }
    }
}
