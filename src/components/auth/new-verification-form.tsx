"use client"

import { useCallback, useEffect, useState } from "react"
import { CardWrapper } from "@/components/auth/card-wrapper"
import { useSearchParams } from "next/navigation"
import { PuffLoader } from "react-spinners"
import { newVerification } from "@/actions/new-verification"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"


export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onsubmit = useCallback(() => {
        if (success || error) return;
        if (!token) {
            setError("Missing token!");
            return;
        }

        newVerification(token)
        .then((data) => {
            setSuccess(data.success);
            setError(data.error);
        })
        .catch(() => {
        setError("Something went wrong!");
        })
    }, [token, success, error]);

    useEffect(() => {
        onsubmit();
    }, [onsubmit]);

    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (

                <PuffLoader />
                )}
                <FormSuccess message={success} />
                {!success && (
                <FormError message={error} />
                )}
            </div>
        </CardWrapper>
    )
}