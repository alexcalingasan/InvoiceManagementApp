using InvoiceManagementApp.Application.Invoices.ViewModels;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace InvoiceManagementApp.Application.Invoices.Queries
{
    public class GetUserInvoicesQuery: IRequest<IList<InvoiceVm>>
    {
        public string User { get; set; }
    }
}
