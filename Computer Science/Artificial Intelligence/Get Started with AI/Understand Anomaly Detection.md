# Understand anomaly detection

Imagine you're creating a software system to monitor credit card transactions and detect unusual usage patterns that might indicate fraud. Or an application that tracks activity in an automated production line and identifies failures. Or a racing car telemetry system that uses sensors to proactively warn engineers about potential mechanical failures before they happen.

These kinds of scenario can be addressed by using *anomaly detection* - a machine learning based technique that analyzes data over time and identifies unusual changes.

Let's explore how anomaly detection might help in the racing car scenario.

![img](P:\dev\AllNote\.mdnote\assets\MYNU4}HR6LBI8WJOZ8NAA8W.png)

1. Sensors in the car collect telemetry, such as engine revolutions, brake temperature, and so on.
2. An anomaly detection model is trained to understand expected fluctuations in the telemetry measurements over time.
3. If a measurement occurs outside of the normal expected range, the model reports an anomaly that can be used to alert the race engineer to call the driver in for a pit stop to fix the issue before it forces retirement from the race.