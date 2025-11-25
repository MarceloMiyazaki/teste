// Escuta mensagens do popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "salvar") {
    chrome.storage.local.get({ history: [] }, data => {
      const updatedHistory = data.history;
      updatedHistory.push(message.dado);
      chrome.storage.local.set({ history: updatedHistory }, () => {
        sendResponse({ success: true });
      });
    });
    return true; // Mantém o sendResponse válido async
  }

  if (message.action === "verRegistro") {
    chrome.storage.local.get({ history: [] }, data => {
      sendResponse({ history: data.history });
    });
    return true;
  }
});
