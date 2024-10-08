'use client';
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export default function FilePage({ params }) {
  const filename = params.filename;
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isFetchingInfo, setIsFetchingInfo] = useState(false);
  const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

  const getTranscription = useCallback(() => {
    setIsFetchingInfo(true);
    axios.get('/api/transcribe?filename=' + filename)
      .then(response => {
        setIsFetchingInfo(false);
        const status = response.data?.status;
        const transcription = response.data?.transcription;

        if (status === 'IN_PROGRESS') {
          setIsTranscribing(true);
          setTimeout(getTranscription, 3000);
        } else {
          setIsTranscribing(false);

          if (transcription && transcription.results && transcription.results.items) {
            setAwsTranscriptionItems(
              clearTranscriptionItems(transcription.results.items)
            );
          } else {
            console.error('Transcription data is missing or incomplete');
          }
        }
      })
      .catch(error => {
        setIsFetchingInfo(false);
        console.error('Error fetching transcription:', error);
      });
  }, [filename]);

  useEffect(() => {
    getTranscription();
  }, [filename, getTranscription]);

  if (isTranscribing) {
    return (
      <div className="mt-2">Transcribing your video...</div>
    );
  }

  if (isFetchingInfo) {
    return (
      <div className="mt-2">Fetching information...</div>
    );
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-8 mt-7 sm:gap-16">
        <div className="">
          <h2 className="text-2xl mb-4 text-white/60">Transcription</h2>
          <TranscriptionEditor
            awsTranscriptionItems={awsTranscriptionItems}
            setAwsTranscriptionItems={setAwsTranscriptionItems} />
        </div>
        <div className="mt-1">
          <h2 className="text-2xl mb-6 text-white/60">Result</h2>
          <ResultVideo
            filename={filename}
            transcriptionItems={awsTranscriptionItems} />
        </div>
      </div>
    </div>
  );
}
