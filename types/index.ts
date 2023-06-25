export interface IServiceDefault {
  id?: number;
  beneficiary_id?: number;
  payer_id?: number;
  status?: string;
  created_at?: Date|string;
  updated_at?: Date|string;
  transaction_type?: string;
  amount?: number;
  currency?: string;
  comment?: string;
  payment_id?: number;
  property_id?: number;
}