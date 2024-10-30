'use client';
import PlacementContainer from '@/components/container/PlacementContainer';
import TextContainer from '../components/container/TextContainer';
import React, { useState, useEffect } from 'react';

interface ReceiptItem {
  id: number;
  name: string;
  price: number;
  count: number;
}
interface ReceiptData {
  nfcCardID: string;
  items?: ReceiptItem[];
  total: number;
  shopName: string;
  paiement: string;
}

const Page = () => {
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [asteriskCount, setAsteriskCount] = useState(40); // Default count for first line

  const fetchReceiptData = async () => {
    try {
      const response = await fetch('/api/receiveReceipt', { method: 'GET' });
      const responseData = await response.json();

      if (responseData && responseData.data) {
        const parsedData = JSON.parse(responseData.data);
        setReceiptData(parsedData as ReceiptData);
      } else {
        console.error('Champ de données manquant dans la réponse:', responseData);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération ou de l’analyse des données du reçu:', error);
    }
  };

  // Adjust the number of asterisks based on the container width
  useEffect(() => {
    const updateAsteriskCount = () => {
      const width = window.innerWidth;
      const maxCount = Math.floor(width / 10);
      setAsteriskCount(maxCount > 40 ? 40 : maxCount); // Max 40 for the first line
    };

    updateAsteriskCount(); // Initial call
    window.addEventListener('resize', updateAsteriskCount);

    return () => window.removeEventListener('resize', updateAsteriskCount);
  }, []);

  const { nfcCardID, items, total, shopName, paiement } = receiptData || {};

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PlacementContainer justifyContent="center" alignItems="center" padding={1} width='100'>
        <button
          onClick={fetchReceiptData}
          style={{
            marginTop: '3rem',
            padding: '1rem 1.5rem',
            backgroundColor: '#3da9ae',
            color: '#ededed',
            border: 'none',
            borderRadius: '1rem',
            cursor: 'pointer',
            maxWidth: '250px',
            width: '100%',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d7d84')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3da9ae')}
        >
          <TextContainer Size={1}>Voir votre reçu</TextContainer>
        </button>

        {receiptData ? (
          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: '#f0f0f0',
              borderRadius: '1rem',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
              maxWidth: '300px',
              width: '100%',
              color: '#333',
            }}
          >
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>{shopName}</h2>
            <p style={{ textAlign: 'center', fontSize: '0.9rem', margin: '0.5rem 0' }}>{paiement}</p>
            <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '0.9rem' }}>
              {'*'.repeat(Math.min(asteriskCount, 40))}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <span>Description</span>
              <span>Prix</span>
            </div>
            <p style={{ textAlign: 'center', margin: '0.5rem 0' }}>{'*'.repeat(Math.min(asteriskCount, 36))}</p>

            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {items?.map((item) => (
                <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <span>{item.name} x{item.count}</span>
                  <span>${(item.price * item.count).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <p style={{ textAlign: 'center', margin: '1rem 0' }}>{'*'.repeat(Math.min(asteriskCount, 36))}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              <span>Total</span>
              <span style={{ fontSize: '1.1rem', color: '#000' }}>${((total ?? 0) * 1.15).toFixed(2)}</span>
            </div>

            <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              <p>Sous-Total : ${(total ?? 0).toFixed(2)}</p>
              <p>Taxes : ${((total ?? 0) * 0.15).toFixed(2)}</p>
            </div>

            <p style={{ textAlign: 'center', margin: '1rem 0' }}>{'*'.repeat(Math.min(asteriskCount, 36))}</p>
          </div>
        ) : (
          <p style={{ marginTop: '1rem', color: '#999' }}>Aucune donnée de reçu disponible</p>
        )}
      </PlacementContainer>
    </div>
  );
};

export default Page;
