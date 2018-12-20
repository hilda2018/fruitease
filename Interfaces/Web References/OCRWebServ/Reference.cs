﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.34209
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

// 
// 此源代码是由 Microsoft.VSDesigner 4.0.30319.34209 版自动生成。
// 
#pragma warning disable 1591

namespace Interfaces.OCRWebServ {
    using System;
    using System.Web.Services;
    using System.Diagnostics;
    using System.Web.Services.Protocols;
    using System.Xml.Serialization;
    using System.ComponentModel;
    
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.0.30319.34209")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Web.Services.WebServiceBindingAttribute(Name="OcrInvokeServiceImplSoapBinding", Namespace="http://ocr.webservice.novaone.com/")]
    public partial class OcrInvokeServiceImpl : System.Web.Services.Protocols.SoapHttpClientProtocol {
        
        private System.Threading.SendOrPostCallback queryMainInfoListOperationCompleted;
        
        private System.Threading.SendOrPostCallback queryInfoOperationCompleted;
        
        private bool useDefaultCredentialsSetExplicitly;
        
        /// <remarks/>
        public OcrInvokeServiceImpl() {
            this.Url = global::Interfaces.Properties.Settings.Default.Interfaces_OCRWebServ_OcrInvokeServiceImpl;
            if ((this.IsLocalFileSystemWebService(this.Url) == true)) {
                this.UseDefaultCredentials = true;
                this.useDefaultCredentialsSetExplicitly = false;
            }
            else {
                this.useDefaultCredentialsSetExplicitly = true;
            }
        }
        
        public new string Url {
            get {
                return base.Url;
            }
            set {
                if ((((this.IsLocalFileSystemWebService(base.Url) == true) 
                            && (this.useDefaultCredentialsSetExplicitly == false)) 
                            && (this.IsLocalFileSystemWebService(value) == false))) {
                    base.UseDefaultCredentials = false;
                }
                base.Url = value;
            }
        }
        
        public new bool UseDefaultCredentials {
            get {
                return base.UseDefaultCredentials;
            }
            set {
                base.UseDefaultCredentials = value;
                this.useDefaultCredentialsSetExplicitly = true;
            }
        }
        
        /// <remarks/>
        public event queryMainInfoListCompletedEventHandler queryMainInfoListCompleted;
        
        /// <remarks/>
        public event queryInfoCompletedEventHandler queryInfoCompleted;
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("", RequestNamespace="http://ocr.webservice.novaone.com/", ResponseNamespace="http://ocr.webservice.novaone.com/", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return")]
        public string queryMainInfoList(string token, string invoiceNo, string billNo) {
            object[] results = this.Invoke("queryMainInfoList", new object[] {
                        token,
                        invoiceNo,
                        billNo});
            return ((string)(results[0]));
        }
        
        /// <remarks/>
        public void queryMainInfoListAsync(string token, string invoiceNo, string billNo) {
            this.queryMainInfoListAsync(token, invoiceNo, billNo, null);
        }
        
        /// <remarks/>
        public void queryMainInfoListAsync(string token, string invoiceNo, string billNo, object userState) {
            if ((this.queryMainInfoListOperationCompleted == null)) {
                this.queryMainInfoListOperationCompleted = new System.Threading.SendOrPostCallback(this.OnqueryMainInfoListOperationCompleted);
            }
            this.InvokeAsync("queryMainInfoList", new object[] {
                        token,
                        invoiceNo,
                        billNo}, this.queryMainInfoListOperationCompleted, userState);
        }
        
        private void OnqueryMainInfoListOperationCompleted(object arg) {
            if ((this.queryMainInfoListCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.queryMainInfoListCompleted(this, new queryMainInfoListCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("", RequestNamespace="http://ocr.webservice.novaone.com/", ResponseNamespace="http://ocr.webservice.novaone.com/", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return")]
        public string queryInfo(string requestXml) {
            object[] results = this.Invoke("queryInfo", new object[] {
                        requestXml});
            return ((string)(results[0]));
        }
        
        /// <remarks/>
        public void queryInfoAsync(string requestXml) {
            this.queryInfoAsync(requestXml, null);
        }
        
        /// <remarks/>
        public void queryInfoAsync(string requestXml, object userState) {
            if ((this.queryInfoOperationCompleted == null)) {
                this.queryInfoOperationCompleted = new System.Threading.SendOrPostCallback(this.OnqueryInfoOperationCompleted);
            }
            this.InvokeAsync("queryInfo", new object[] {
                        requestXml}, this.queryInfoOperationCompleted, userState);
        }
        
        private void OnqueryInfoOperationCompleted(object arg) {
            if ((this.queryInfoCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.queryInfoCompleted(this, new queryInfoCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        public new void CancelAsync(object userState) {
            base.CancelAsync(userState);
        }
        
        private bool IsLocalFileSystemWebService(string url) {
            if (((url == null) 
                        || (url == string.Empty))) {
                return false;
            }
            System.Uri wsUri = new System.Uri(url);
            if (((wsUri.Port >= 1024) 
                        && (string.Compare(wsUri.Host, "localHost", System.StringComparison.OrdinalIgnoreCase) == 0))) {
                return true;
            }
            return false;
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.0.30319.34209")]
    public delegate void queryMainInfoListCompletedEventHandler(object sender, queryMainInfoListCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.0.30319.34209")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class queryMainInfoListCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal queryMainInfoListCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public string Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((string)(this.results[0]));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.0.30319.34209")]
    public delegate void queryInfoCompletedEventHandler(object sender, queryInfoCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.0.30319.34209")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class queryInfoCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal queryInfoCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public string Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((string)(this.results[0]));
            }
        }
    }
}

#pragma warning restore 1591