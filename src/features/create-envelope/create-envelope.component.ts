import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Recipient {
  name: string;
  email: string;
  role: string;
}

interface Document {
  name: string;
  file: File;
}

@Component({
  selector: 'app-create-envelope',
  templateUrl: './create-envelope.component.html',
  styleUrls: ['./create-envelope.component.css'],
  imports: [ CommonModule, FormsModule ]
})
export class CreateEnvelopeComponent {
  envelope = { name: '', message: '' };
  recipients: Recipient[] = [{ name: '', email: '', role: 'signer' }];
  uploadedDocs: Document[] = [];

  // Handle File Upload (Regular Input)
  uploadFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedDocs.push({ name: file.name, file });
    }
  }

  // Handle Drag & Drop Upload
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.uploadedDocs.push({ name: file.name, file });
    }
  }

  // Prevent Default Drag Behavior
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  // Remove Uploaded Document
  removeDoc(index: number) {
    this.uploadedDocs.splice(index, 1);
  }

  // Add New Recipient
  addRecipient() {
    this.recipients.push({ name: '', email: '', role: 'signer' });
  }

  // Remove Recipient
  removeRecipient(index: number) {
    this.recipients.splice(index, 1);
  }

  // Save Draft
  saveDraft() {
    console.log('Saving draft...', this.envelope, this.uploadedDocs, this.recipients);
  }

  // Send Envelope
  sendEnvelope() {
    console.log('Sending envelope...', this.envelope, this.uploadedDocs, this.recipients);
  }
}
