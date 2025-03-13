import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../app/nav/nav.component';

interface Recipient {
  type: string;
  email: string;
  role: string;
  contact: string;
}

interface Document {
  name: string;
  file: File;
}

@Component({
  selector: 'app-create-envelope',
  templateUrl: './create-envelope.component.html',
  styleUrls: ['./create-envelope.component.css'],
  imports: [CommonModule, FormsModule, NavComponent]
})
export class CreateEnvelopeComponent {
  envelopeData = {
    title: '',
    description: '',
    documents: [] as { name: string, file: File }[],
    customFields: [] as string[],
    recipients: [] as { routingOrder: number, type: string, recipientType: string, value: string }[],
  };
 
  // File Upload
  onFileSelected(event: any) {
    this.handleFileUpload(event.target.files);
  }
 
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
 
  onFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.handleFileUpload(event.dataTransfer.files);
    }
  }
 
  private handleFileUpload(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.envelopeData.documents.push({ name: files[i].name, file: files[i] });
    }
  }
 
  removeFile(index: number) {
    this.envelopeData.documents.splice(index, 1);
  }
 
  // Recipients
  addRecipient() {
    this.envelopeData.recipients.push({
      routingOrder: this.envelopeData.recipients.length + 1,
      type: 'Email',
      recipientType: 'Signer',
      value: ''
    });
  }
 
  removeRecipient(index: number) {
    this.envelopeData.recipients.splice(index, 1);
  }
 
  // Submit Envelope Data to Backend
  submitEnvelope() {
    const payload = {
      title: this.envelopeData.title,
      description: this.envelopeData.description,
      documents: this.envelopeData.documents.map(doc => ({ name: doc.name })), // Only send names, file will be uploaded separately
      customFields: this.envelopeData.customFields,
      recipients: this.envelopeData.recipients
    };
 
    console.log('Envelope Data:', payload);
    // Call backend API here (Example: this.http.post('API_URL', payload))
  }

  
  saveDraft() {
    console.log('Saving draft...', this.envelopeData);
  }
}
