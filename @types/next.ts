import { NextPageContext } from 'next';
import { DocumentContext } from 'next/document';

export interface WrappedNextPageContext extends NextPageContext {}

export type WrappedDocumentContext = DocumentContext & WrappedNextPageContext;
