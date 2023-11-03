import React from "react";

interface ErrorMessageProps {
    errorMessage: string;
}

export function ErrorMessage({errorMessage}: ErrorMessageProps) { 

  return (    
    <div className="text-center text-red-600">{errorMessage}</div>      
  );
}