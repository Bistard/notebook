# PREDICTIVE MODELS

## cluster model

1. When the experiment run has finished, select the **Evaluate Model** module and in the settings pane, on the **Outputs + Logs** tab, under **Data outputs** in the **Evaluation results** section, use the **Preview Data** icon to view the performance metrics. These metrics can help data scientists assess how well the model separates the clusters. They include a row of metrics for each cluster, and a summary row for a combined evaluation. The metrics in each row are:
    - **Average Distance to Other Center**: This indicates how close, on average, each point in the cluster is to the centroids of all other clusters.
    - **Average Distance to Cluster Center**: This indicates how close, on average, each point in the cluster is to the centroid of the cluster.
    - **Number of Points**: The number of points assigned to the cluster.
    - **Maximal Distance to Cluster Center**: The maximum of the distances between each point and the centroid of that point’s cluster. If this number is high, the cluster may be widely dispersed. This statistic in combination with the **Average Distance to Cluster Center** helps you determine the cluster’s *spread*.



# COMPUTER VISION

## Analysize Images with Computer Vision

Some potential uses for computer vision include:

- **Content Organization**: Identify people or objects in photos and organize them based on that identification. Photo recognition applications like this are commonly used in photo storage and social media applications.
- **Text Extraction**: Analyze images and PDF documents that contain text and extract the text into a structured format.
- **Spatial Analysis**: Identify people or objects, such as cars, in a space and map their movement within that space.

## Classify Images with Custom Vision

Some potential uses for image classification include:

- **Product identification**: performing visual searches for specific products in online searches or even, in-store using a mobile device.
- **Disaster investigation**: identifying key infrastructure for major disaster preparation efforts. For example, identifying bridges and roads in aerial images can help disaster relief teams plan ahead in regions that are not well mapped.
- **Medical diagnosis**: evaluating images from X-ray or MRI devices could quickly classify specific issues found as cancerous tumors, or many other medical conditions related to medical imaging diagnosis.

#### Model evaluation

- **Precision**: What percentage of the class predictions made by the model were correct? For example, if the model predicted that 10 images are oranges, of which eight were actually oranges, then the precision is 0.8 (80%).
- **Recall**: What percentage of class predictions did the model correctly identify? For example, if there are 10 images of apples, and the model found 7 of them, then the recall is 0.7 (70%).
- **Average Precision (AP)**: An overall metric that takes into account both precision and recall).

## Detect object with Custom Vision

Some sample applications of object detection include:

- **Checking for building safety**: Evaluating the safety of a building by analyzing footage of its interior for fire extinguishers or other emergency equipment.
- **Driving assistance**: Creating software for self-driving cars or vehicles with *lane assist* capabilities. The software can detect whether there is a car in another lane, and whether the driver's car is within its own lanes.
- **Detecting tumors**: Medical imaging such as an MRI or x-rays that can detect known objects for medical diagnosis.

#### Model training and evaluation

- **Precision**: What percentage of class predictions did the model correctly identify? For example, if the model predicted that 10 images are oranges, of which eight were actually oranges, then the precision is 0.8 (80%).
- **Recall**: What percentage of the class predictions made by the model were correct? For example, if there are 10 images of apples, and the model found 7 of them, then the recall is 0.7 (70%).
- **Mean Average Precision (mAP)**: An overall metric that takes into account both precision and recall across all classes).

## Detect and Analyse faces with Face Service

Microsoft Azure provides multiple cognitive services that you can use to detect and analyze faces, including:

- **Computer Vision**, which offers face detection and some basic face analysis, such as determining age.
- **Video Indexer**, which you can use to detect and identify faces in a video.
- **Face**, which offers pre-built algorithms that can detect, recognize, and analyze faces.

## Read text with the Computer Vision service

The ability to recognize printed and handwritten text in images, is beneficial in many scenarios such as:

- note taking
- digitizing forms, such as medical records or historical documents
- scanning printed or handwritten checks for bank deposits

When you use the OCR API to process an image, it returns a hierarchy of information that consists of:

- **Regions** in the image that contain text
- **Lines** of text in each region
- **Words** in each line of text

## Analyze receipts with the Form Recognizer service

Using the Form Recognizer service, we can input an image of a receipt like the one above, and return useful information that might be required for an expense claim, including:

- The name, address, and telephone number of the merchant.
- The date and time of the purchase.
- The quantity and price of each item purchased.
- The subtotal, tax, and total amounts.

## Analyze text with the Language service

While these techniques can be used to great effect, programming them can be complex. In Microsoft Azure, the **Language** cognitive service can help simplify application development by using pre-trained models that can:

- Determine the language of a document or text (for example, French or English).
- Perform sentiment analysis on text to determine a positive or negative sentiment.
- Extract key phrases from text that might indicate its main talking points.
- Identify and categorize entities in the text. Entities can be people, places, organizations, or even everyday items such as dates, times, quantities, and so on.

## Recognize and synthesize speech

To enable this kind of interaction, the AI system must support two capabilities:

- **Speech recognition** - the ability to detect and interpret spoken input.
- **Speech synthesis** - the ability to generate spoken output.

#### Speech Recognition

- An *acoustic* model that converts the audio signal into phonemes (representations of specific sounds).
- A *language* model that maps phonemes to words, usually using a statistical algorithm that predicts the most probable sequence of words based on the phonemes.

#### Speech synthesis

- The text to be spoken.
- The voice to be used to vocalize the speech.

- A **Speech** resource - choose this resource type if you only plan to use the Speech service, or if you want to manage access and billing for the resource separately from other services.
- A **Cognitive Services** resource - choose this resource type if you plan to use the Speech service in combination with other cognitive services, and you want to manage access and billing for these services together.

## Translate Text and Speech

Microsoft Azure provides cognitive services that support translation. Specifically, you can use the following services:

- The **Translator Text** service, which supports text-to-text translation.
- The **Speech** service, which enables speech-to-text and speech-to-speech translation.

The Speech service includes the following application programming interfaces (APIs):

- **Speech-to-text** - used to transcribe speech from an audio source to text format.
- **Text-to-speech** - used to generate spoken audio from a text source.
- **Speech Translation** - used to translate speech in one language to text or speech in another.

You can use the **Speech Translation** API to translate spoken audio from a streaming source, such as a microphone or audio file, and return the translation as text or an audio stream. This enables scenarios such as real-time closed captioning for a speech or simultaneous two-way translation of a spoken conversation.

## Create a language model with Conversational Language Understanding

- **Language Service**: A resource that enables you to build apps with industry-leading natural language understanding capabilities without machine learning expertise.
- **Cognitive Services**: A general cognitive services resource that includes Conversational Language Understanding along with many other cognitive services. You can only use this type of resource for *prediction*.

# conversational AI

## Build a bot with the Language Service and Azure Bot Service